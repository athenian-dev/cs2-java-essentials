#!/usr/bin/env python3
# ===========================================================================
#
#            L O C K   A N D   U N L O C K   questions.js
#
# ===========================================================================
#
#  Anyone can read questions.js in their own browser, so the hunt cannot sit
#  there in plain sight. This script scrambles the whole thing, and puts it
#  back when you want to edit it again.
#
#      python3 build.py unlock     plain text you can read and edit
#
#      python3 build.py lock       scrambled, ready to commit
#
#      python3 build.py check      say which form the file is in, and prove
#                                  a locked file still works
#
#  The routine is:  unlock  ->  edit questions.js  ->  lock  ->  commit.
#  Only ever commit the locked form.
#
#  All three commands ask for your passphrase. Pick one and keep it: it is
#  the only way back into a locked file. (If you would rather not be asked,
#  put it in the HUNT_PASSPHRASE environment variable.)
#
#
#  WHAT A LOCKED FILE LOOKS LIKE
#
#  Nothing readable is left. Each question turns into one long line of
#  jumble, and the questions, the answers, the next-location messages and
#  even the "# name" lines are all inside it. There are two locks:
#
#      the outer lock    A question is scrambled with a key built from its
#                        own name, the number on its QR code. The page only
#                        learns that name when someone opens index.html#612,
#                        so the page can only ever open the one question the
#                        student is standing in front of.
#
#      the inner lock    Inside a question, the correct answer is not marked.
#                        All four look alike, and the next-location message
#                        is scrambled again with a key built from the text of
#                        the correct answer. The page checks an answer by
#                        building that key from what the student picked and
#                        seeing whether it fits. So the page never holds the
#                        correct answer, not even after it has opened the
#                        question: get it right and the message unscrambles,
#                        get it wrong and there is nothing there to read.
#
#      the way back in   A copy of your plain text, scrambled with your
#                        passphrase, rides along at the end of the file. That
#                        is what unlock reads. Your passphrase is not in the
#                        file and never reaches the page, so this copy is no
#                        use to a student.
#
#
#  WORTH KNOWING
#
#  This stops someone reading the hunt out of the file, which is the thing
#  that actually happens in a classroom. It is not unbreakable, and nothing
#  that runs in a browser can be: the page has to be able to check answers,
#  so everything it needs is on the student's own machine. A student who
#  reads index.html, works out the scheme and writes their own script could
#  try all four answers on the question in front of them, and could try all
#  1000 three-digit names to reach the questions they have not found yet.
#  Longer, less guessable names on the QR codes would close that second door.
#
#
#  ONE RULE: never edit a locked file by hand. Unlock it, edit, lock it.
#
# ===========================================================================

import base64
import getpass
import hashlib
import hmac
import os
import re
import secrets
import sys

# The first three must match the numbers at the top of index.html.
VERSION = 1
ITERATIONS = 100000            # stretching for a name or an answer
SALT_BYTES = 16
TAG_BYTES = 16
RECOVERY_ITERATIONS = 600000   # stretching for your passphrase, page never does this

QUESTIONS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'questions.js')

# The whitespace we trim off the ends of a line. This is the same set that a
# browser's .trim() removes, so the page and this script agree on exactly
# what the text of an answer is, down to the last space.
SPACE = ' \t\r\n\f\v ﻿'


# ---------------------------------------------------------------------------
# The scrambling itself.
#
# A key is stretched out of some secret (a name, an answer, your passphrase)
# using a slow, deliberately repetitive recipe. From the key we make two
# things: a short "tag", which lets us recognise the right key without
# storing it anywhere, and a keystream, which is a long run of unguessable
# bytes that we XOR the text with.
# ---------------------------------------------------------------------------
def derive_key(secret, salt, iterations):
    return hashlib.pbkdf2_hmac('sha256', secret.encode('utf-8'), salt, iterations, dklen=32)


def check_tag(key):
    return hmac.new(key, b'check', hashlib.sha256).digest()[:TAG_BYTES]


def keystream(key, length):
    out = b''
    counter = 0
    while len(out) < length:
        out += hmac.new(key, b'ks' + str(counter).encode(), hashlib.sha256).digest()
        counter += 1
    return out[:length]


def xor(data, other):
    return bytes(a ^ b for a, b in zip(data, other))


def seal(key, text):
    """Scramble some text, with a tag in front so the key can be recognised."""
    plain = text.encode('utf-8')
    return check_tag(key) + xor(plain, keystream(key, len(plain)))


def unseal(key, sealed):
    """Unscramble, or None if this is the wrong key."""
    if not hmac.compare_digest(check_tag(key), sealed[:TAG_BYTES]):
        return None
    body = sealed[TAG_BYTES:]
    return xor(body, keystream(key, len(body))).decode('utf-8')


def encode(data):
    return base64.b64encode(data).decode('ascii')


def decode(text):
    return base64.b64decode(text)


# ---------------------------------------------------------------------------
# Reading questions.js.
#
# Only the part between the two ` marks is touched. Everything else in the
# file, all the comments and LOCKOUT_SECONDS, is left exactly as it is.
# ---------------------------------------------------------------------------
def read_file():
    with open(QUESTIONS_FILE, encoding='utf-8') as f:
        whole = f.read()

    match = re.search(r'(var QUESTIONS = `)(.*?)(`)', whole, re.DOTALL)
    if not match:
        sys.exit('Could not find "var QUESTIONS = `...`" in questions.js')

    return whole, match


def write_block(whole, match, new_block):
    with open(QUESTIONS_FILE, 'w', encoding='utf-8') as f:
        f.write(whole[:match.start(2)] + new_block + whole[match.end(2):])


def is_separator(line):
    return line.strip(SPACE).startswith('---')


def marker_of(line):
    stripped = line.strip(SPACE)
    return stripped[:1], stripped[1:].strip(SPACE)


def split_into_questions(block):
    """Cut the block at every --- line, the same way the page does."""
    chunks = [[]]
    for line in block.split('\n'):
        if is_separator(line):
            chunks.append([])
        else:
            chunks[-1].append(line)
    return chunks


def sort_lines(chunk):
    """Find the name, the answers and the > line in one question.

    A position is the line's number inside the chunk, so a line can be put
    back exactly where it was found.
    """
    found = {'name': '', 'answers': [], 'correct': None, 'message': None}
    inside_code_block = False

    for position, line in enumerate(chunk):
        if line.strip(SPACE) == '~~~':
            inside_code_block = not inside_code_block
            continue
        if inside_code_block:
            continue

        marker, rest = marker_of(line)

        if marker == '#':
            found['name'] = rest.lower()
        elif marker in ('-', '*'):
            if marker == '*':
                found['correct'] = len(found['answers'])
            found['answers'].append({'position': position, 'text': rest})
        elif marker == '>':
            found['message'] = position

    return found


def swap_marker(line, new_marker):
    """Replace the first character that is not a space, leaving spacing alone."""
    indent = len(line) - len(line.lstrip(SPACE))
    return line[:indent] + new_marker + line[indent + 1:]


def looks_locked(block):
    return any(line.strip(SPACE).startswith('!lock ') for line in block.split('\n'))


def ask_passphrase(confirm):
    from_environment = os.environ.get('HUNT_PASSPHRASE')
    if from_environment:
        return from_environment

    if not sys.stdin.isatty():
        sys.exit('No passphrase. Run this in a terminal, or set HUNT_PASSPHRASE.')

    passphrase = getpass.getpass('Passphrase: ')
    if not passphrase:
        sys.exit('A passphrase is needed. Nothing was changed.')

    if confirm and getpass.getpass('Again, to be sure: ') != passphrase:
        sys.exit('Those two did not match. Nothing was changed.')

    return passphrase


# ---------------------------------------------------------------------------
# lock
# ---------------------------------------------------------------------------
def hide_the_answer(name, chunk, found):
    """Put the inner lock on one question, and hand back its lines.

    The * becomes a -, so the four answers look alike, and the > line is
    replaced by an ! line holding the scrambled message. The whole > line is
    what gets scrambled, spacing and all, so unlocking gives it back exactly.
    """
    lines = list(chunk)
    correct = found['answers'][found['correct']]

    salt = secrets.token_bytes(SALT_BYTES)
    key = derive_key(name + '\n' + correct['text'], salt, ITERATIONS)

    # A question with no > line hides an empty line, so unlock does not
    # invent a message that was never there.
    message_line = lines[found['message']] if found['message'] is not None else ''
    payload = encode(bytes([VERSION]) + ITERATIONS.to_bytes(4, 'big') + salt +
                     seal(key, message_line))

    lines[correct['position']] = swap_marker(lines[correct['position']], '-')

    if found['message'] is not None:
        lines[found['message']] = '!  ' + payload      # right where the > line was
    else:
        lines.insert(found['answers'][-1]['position'] + 1, '!  ' + payload)

    return lines


def lock(block, passphrase):
    if looks_locked(block):
        sys.exit('questions.js is already locked. Nothing to do.')

    file_salt = secrets.token_bytes(SALT_BYTES)
    sealed_questions = []

    for number, chunk in enumerate(split_into_questions(block), start=1):
        found = sort_lines(chunk)
        if not found['answers']:
            continue                                   # blank space between questions

        label = found['name'] or 'question %d' % number

        if not found['name']:
            sys.exit('Question %d has no "# name" line, so nothing can reach it and '
                     'there is no key to lock it with. Give it a name and try again.'
                     % number)
        if found['correct'] is None:
            sys.exit('Question "%s" has no * line, so no answer is marked correct.'
                     % label)

        inner = hide_the_answer(found['name'], chunk, found)
        key = derive_key(found['name'], file_salt, ITERATIONS)
        sealed_questions.append(encode(seal(key, '\n'.join(inner).strip('\n'))))

    if not sealed_questions:
        sys.exit('No questions found in questions.js. Nothing was changed.')

    # Your own way back in: the plain text, scrambled with your passphrase.
    recovery_salt = secrets.token_bytes(SALT_BYTES)
    recovery_key = derive_key(passphrase, recovery_salt, RECOVERY_ITERATIONS)

    new_block = ['',
                 '!lock %d %d %s' % (VERSION, ITERATIONS, encode(file_salt)),
                 '']
    for sealed in sealed_questions:
        new_block += ['!q ' + sealed, '']
    new_block += ['!recovery %d %d %s %s' % (VERSION, RECOVERY_ITERATIONS,
                                             encode(recovery_salt),
                                             encode(seal(recovery_key, block))),
                  '']

    return '\n'.join(new_block), len(sealed_questions)


# ---------------------------------------------------------------------------
# unlock
# ---------------------------------------------------------------------------
def read_recovery(block, passphrase):
    """Find the !recovery line and unscramble the plain text out of it."""
    for line in block.split('\n'):
        stripped = line.strip(SPACE)
        if not stripped.startswith('!recovery '):
            continue

        parts = stripped.split()
        if len(parts) != 5:
            sys.exit('The !recovery line in questions.js is damaged.')

        version, iterations, salt, sealed = int(parts[1]), int(parts[2]), parts[3], parts[4]
        if version != VERSION:
            sys.exit('That file was locked by a different version of build.py.')

        key = derive_key(passphrase, decode(salt), iterations)
        return unseal(key, decode(sealed))

    sys.exit('There is no !recovery line in questions.js, so there is no way back '
             'into it. An older commit of the file may still have one.')


def unlock(block, passphrase):
    if not looks_locked(block):
        sys.exit('questions.js is already unlocked. Nothing to do.')

    plain = read_recovery(block, passphrase)
    if plain is None:
        sys.exit('That passphrase does not open this file. Nothing was changed.')

    return plain, len(count_questions(plain))


def count_questions(block):
    return [sort_lines(chunk) for chunk in split_into_questions(block)
            if sort_lines(chunk)['answers']]


# ---------------------------------------------------------------------------
# check
#
# For a locked file this walks the same path the page walks: open a question
# with nothing but its name, then find the correct answer by trying each one
# in turn, and read the message out. If that works here, it works there.
# ---------------------------------------------------------------------------
def check(block, passphrase):
    if not looks_locked(block):
        questions = count_questions(block)
        print('questions.js is UNLOCKED: %d questions, readable by anyone who opens '
              'the file.' % len(questions))
        for found in questions:
            if not found['name']:
                print('  ! a question has no "# name" line')
            elif found['correct'] is None:
                print('  ! "%s" has no * line' % found['name'])
        print('Run "python3 build.py lock" before committing.')
        return

    plain = read_recovery(block, passphrase)
    if plain is None:
        sys.exit('That passphrase does not open this file.')

    header = None
    sealed_questions = []
    for line in block.split('\n'):
        stripped = line.strip(SPACE)
        if stripped.startswith('!lock '):
            header = stripped.split()
        elif stripped.startswith('!q '):
            sealed_questions.append(decode(stripped[3:].strip(SPACE)))

    if header is None:
        sys.exit('There is no !lock line in questions.js.')

    iterations, file_salt = int(header[2]), decode(header[3])
    names = [found['name'] for found in count_questions(plain)]

    print('questions.js is LOCKED: %d questions, %d of them reachable.'
          % (len(sealed_questions), len(names)))

    for name in names:
        key = derive_key(name, file_salt, iterations)
        opened = next((text for text in
                       (unseal(key, sealed) for sealed in sealed_questions)
                       if text is not None), None)

        if opened is None:
            print('  BROKEN  #%-8s no question opens with this name' % name)
            continue

        found = sort_lines(opened.split('\n'))
        inner = next((marker_of(line)[1] for line in opened.split('\n')
                      if marker_of(line)[0] == '!'), None)

        if inner is None or found['correct'] is not None:
            print('  BROKEN  #%-8s the inner lock is missing' % name)
            continue

        raw = decode(inner)
        salt = raw[5:5 + SALT_BYTES]
        message = None
        position = None
        for index, answer in enumerate(found['answers']):
            answer_key = derive_key(name + '\n' + answer['text'],
                                    salt, int.from_bytes(raw[1:5], 'big'))
            opened_message = unseal(answer_key, raw[5 + SALT_BYTES:])
            if opened_message is not None:
                message, position = opened_message, index
                break

        if message is None:
            print('  BROKEN  #%-8s none of its answers opens the message' % name)
        else:
            print('  ok      #%-8s answer %d of %d  ->  %s'
                  % (name, position + 1, len(found['answers']),
                     marker_of(message)[1] or '(no message)'))


# ---------------------------------------------------------------------------
# Which command was asked for.
# ---------------------------------------------------------------------------
def main():
    command = sys.argv[1] if len(sys.argv) > 1 else ''

    if command not in ('lock', 'unlock', 'check'):
        print('Usage:')
        print('  python3 build.py unlock    plain text you can edit')
        print('  python3 build.py lock      scrambled, ready to commit')
        print('  python3 build.py check     which form the file is in')
        sys.exit(1)

    whole, match = read_file()
    block = match.group(2)

    if command == 'lock':
        new_block, count = lock(block, ask_passphrase(confirm=True))
        write_block(whole, match, new_block)
        print('Locked %d questions. questions.js is ready to commit.' % count)
        print('Run "python3 build.py unlock" when you want to edit it again.')

    elif command == 'unlock':
        new_block, count = unlock(block, ask_passphrase(confirm=False))
        write_block(whole, match, new_block)
        print('Unlocked %d questions. questions.js is plain text again.' % count)
        print('Remember to run "python3 build.py lock" before you commit.')

    else:
        check(block, ask_passphrase(confirm=False) if looks_locked(block) else '')


if __name__ == '__main__':
    main()
