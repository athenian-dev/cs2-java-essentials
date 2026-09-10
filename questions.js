// ===========================================================================
//
//                  T H E   O N L Y   F I L E   Y O U   E D I T
//
// ===========================================================================
//
//
//  MARKERS  —  these only count at the START of a line
//
//      # name         the web address for this question:  index.html#name
//
//      - answer       a wrong answer
//      * answer       the correct answer
//
//      > message      what to show when they get it right
//
//      ---            ends this question, starts the next one
//
//
//  Every other line is part of the question itself. Blank lines, indenting
//  and as many lines as you like are all fine. The # and > lines are optional.
//
//
//  PASTING CODE  —  put a line of ~~~ before and after it
//
//      ~~~
//      public class Hello {
//          // anything at all in here, including * and ** and < >
//      }
//      ~~~
//
//  Inside those lines NOTHING is a marker, so code arrives exactly as pasted.
//
//
//  SMALL FORMATTING  —  in your own sentences, outside the ~~~ lines
//
//      **bold**       shows up in bold
//      ~code~         shows up in a typewriter font, for a word or two
//
//  Every ** and ~ needs a partner. Use these in text you write, not in code
//  you paste. (Code uses ~ rather than a backtick, because a backtick would
//  end the block of questions below.)
//
//
//  TWO CHARACTERS TO WATCH FOR, even inside ~~~ lines, because they mean
//  something to this file itself:
//
//      a backtick     would end the questions block:  write  \`   instead
//      ${             would be read as a blank to fill in:  write  \${
//
//
//  BLANK QUESTION TO COPY
//
//      # name
//
//      The question goes here.
//
//      - wrong answer
//      - wrong answer
//      * right answer
//
//      > Correct! Where to go next.
//
//      ---
//
//  LOCKING  —  before you commit
//
//  This file is on the web, so a student can open it and read whatever is
//  in it. Scramble it first:
//
//      python3 build.py lock       scrambled, ready to commit
//      python3 build.py unlock     plain text you can edit again
//      python3 build.py check      which form it is in, and does it work
//
//  So the routine is:  unlock  ->  edit this file  ->  lock  ->  commit.
//  Both commands ask for your passphrase, and a locked file cannot be
//  opened without it. Only ever commit the locked form.
//
//  A locked file still works in the browser, and so does a plain one, so
//  you can try your questions out either way. Never edit a locked file by
//  hand: unlock it first. The comments up here are left alone by both
//  commands, so only the questions below change.
//
// ===========================================================================


// How many seconds the Submit button is locked after a wrong answer.

var LOCKOUT_SECONDS = 60


// Everything between the two ` marks is your questions.

var QUESTIONS = `
!lock 1 100000 907bLgaNRz7LTRbmGGRnBA==

!q Vf0YqH+zXJngcrIPmJyuh2pacWqhRdmnoRQu0OTMI3G882VKbUjKVpZPm5Dyk2YQwikVL8A2FY6EVaxRhP3Ej8SY6ykC8qNJpjYnMiyvqPtio6nLMOpj2hZsTpYK9pEFxJ9XgIkOXnjuPex7DDN4nknItwyEniDHmFi/I1oSSSNA4O8Uiquavw9fdRjv6nJ7hOrvXgfvlZpAsERKxuJK8HoQ7QizQNHQsLN5zuqDh6J+fh7aodgKtK+JwVc8fxUk6jBm9+ObXQZcQUideX2slOR/P4htUA+t866M1ZpEolIPN2Fia2bhvFbS5y0KxmkAz/wbZmRcJo5roQUcKjIZs7U8ndTLgjEZhHmQ7Z98dqFFO5buH5J15DE5+MOLrrhAdDLrG3UoVASIBooFs6hHvP37Y0mc8kwYrqlvNIJvgMsHOkXvzjeP9LjVVoLRfeB+Z6Klea2JaEniC+1Avr/+FYPNbUTVkCOVFfFMyE1NZNSSlQ8Kom1d9TFdSvXE0hOWMjKrbdjmIbnohnbXnUkj+Bnd3I+OeffM/zDG75uVTsBUAtmWDAmVIvzS2VnKWtLNqThEHCKrsvahjjPGpLt8uHt69ByqXO9nUi2CMZB+YYQv/bDHedH3e7pnxP3mgk2o2dGvGa5XQy0=

!q 7INpAGGJWUFfU85ipqQWgLNn82a0zU2s3pVeNGYE5dmqYRLWocr+TUUoMB8UEyCoLmFJaCuM2TBRGYy4k+S9NR0SsNYGUAzM4O2KGmhP8Q91uRT2tAVwDKj+R+886W7nLXcV9BBXo8ccv5N3M4nlmjaTII04JUj2LXh+jX3JFG16vUISGYIBf3cZWlopI2NkRc8wDFVj7phswN9JK816ag3B6uVmrZEvGJU7YsBwXXdwyyLXgDYN5r5hKgUJ4P0tGuFo+aoD/apP1EYbBBvt8bxZ/vFyIdfy8SOK2hShFQpIHsDIbmtC60+Lmn1Rx0AaiNO6p2z2nBB1/Mc96i6Tu1qnyG7nNmAIjhFIjZxOoirswtDBIztZM7XZGS6YDK6/FeaDhFt/9Dyrm20T9KA7A6OvmAmsEYyY5Rjh4boLnkZmnlUDBw6rOB5kyTz2o+oeD5GpahE+RLp7rnMTEYxJz8trDMwY1h7wkUjmlMppfycNBaYZvW0i8qVTvzO3eRR8ZVtI7eEMxocu0Zu32xB2CA2hpZuqZZ5zNFJPNCYvi9UM7s4gtgN8iaeZMJVJxrWZJUF45v5QZdmc

!q S/UYqbtXvggdmre2DFIFc2U7c3msHvGvGin5Ph1CBxUizVeXlFLU52LJIE0aGYXJaF1KMfTS0ipZaW5FPluOtztLQJnof5d9inewmUtvOid5W3s7IkJV/jTregC4654bRZVSPw261A+CjQMINF6xi4R1CChUJXWMf5pkioMISOcWWdLhLpNyOqfe+dLazt6w4mN5b4tI13XYoIhv+yoU2I7DH+Y9wFadMj2PQgU6U4oN+16NAcSRvb+W+Vhbu5MH2ownSQzZsl5kmykG3SdsFRYn0n/cipdlZ3094qK0X/lp2WCYPb1FDkW32OTgPljGVhhFUH32URJbcRwynbjweBBQ0aVbFFwGc0ZwdrDkOrQTbTfnCNjVkvcUvS39F3A9vBJXGWlJs8gmMorM9XQWSowd8x5VQyqKFe3kCgH/e00FR1ZZd4Zxj62qGwNhm3WLQ23iLGhatEWDGwEt

!q uyut6HcuAN62PZf3WqVh6f1z61B376Cx6dvAnbVOCriDKLF1sH86cRmlADN9ZmAhVMIgG+5fSvgBL15XK04YivarJNI6it6e5JZmiFMqpSvCp5uWcOT4H8SWd063XEOVZjHfK/aK8fc6IQgj/JvNfr3tBeOA/E9EI5hhm0GwZ6sSKVdPGS/0FC7lzOcE2WVkmRvgA3HdUPVBgSH2w67NAFCMsZkttP2KLfDAdC/+wiRac0jgpYzQRDfw95VBxyWIJnLRBDsyVxEaYpcC5/zek5nKzvL/fCK+N+pae67wDUUN8WrwtSBNehFpZ/UouZoNi5PSw8jCYhDJ/XR6B4OsRwLjZsQZt8YXW2qU9sDg4fLPXkEcfBZdepX1WmihRk989WbU8o62a30VOImER27Hom0TitAn8jwxLu2rnPBX8+m8cKXzNVb7B2L0YMU8Y0djZ5n1wWRR8V/yLA/+f+GYLAeC6RKnaIgyULINosghSVUSa3VqWDg51xv+b//ux1Am6Qy62S/9TZSFMYY5+pmgMsTkSRh8rBkqTH5N4CPbgiz8NahXWfaD7+p+ne0iKzbIA4y6YTm4erxeeig6MuCui1riYUzWBi81uhtSohbL2ioSBh8FtXOX26q+ROKBqQXcHaWLblar3mnMjjbui9hI9Wb3mnO+9kUrji9w4BfjR8toJ7TH2eJixXphFo1aJgDI8NwAoVcipplBXrSLNr3e9c7rV44AkYGT5ubV00CYflWPeQ==

!q C+mbsEGqu2hUMjAqjDaYGr9wqcUuCQPwUtMbBgAEHpMWoesyvLlCljAFhBZ7qP2FJctNvWRdwlpj+tebIfJ8JiWlYCYZrVlD+Z3vAhLt2ZPaC86KAytG5+f5pPAjOkRcXFz5Lft9YHl7Gj/XpGsetN2bbC15gaDD53kLLINWdvMVavC5q+ijTaPpOHS4TaYBykPBo6e+GZTVTZn+3aJbNWcbg5klH9qjroYi96aCa6jzswxeBTGMvNSuFPwDx4Xicb4xErIFu0oUkKVUGdSJiG2PpCxatrhwG/HoJiSTT61CYAkUKDqYERZRTHxct/yqGLjispHcDULkZCy5fmmFcnO9TNSPJPgOefuYUfE6kHi24Tyjwt/rGMLYrkIIlUTfBpNqwKhn+cIKYpcDW5cNde7gpw==

!q 3iVK0RwlXv8oX0BhX8hTnXzg/p3K3mRygxWVQC1qCnE/rH5d6dE8idXkpSutyuTRjEH/cd5W9p5zr8Nk7qHSI7k4Zyf2plWyWAIVP6LsBOPdN4/5615CbAmlbmFyYNTwaBCN7u9ym4Jm44dlvupsglH1Pg6+VUY3gRYUkm9jIgF/pB47A6b4MkpAzOl39QkXWJAtq3Dw8rwQdHstS/BR02xHmbG9CwFchlbJvjFCN/LjdblOTE82I4OOeNl6YWjiLaphYr/GZv/Bv3THDkw54hn+VNzxdZL9SgGCpQm5D1Uzx/PaljoppHsPTV0/DZ4RuSBNn+Fvr8O40UZDamlWR7Y+tot6lDTb2PkHH17/5ohRa1Q+0ovT2vhSoNt2vA/j9mHMfNaLP6z45uQACm4AWlAJaianMLeBHi93h5+N9vFTIDmSYfV4dlF4kPdzYjEY57k/kdiwsjxrzQfXtlkeG0osDTVxDM2amO9xY0VEY6pTf5MztJKO95w7pY+e4she05BICQbI7K3LhfgzXPnLFnh1KHAgtVowhLithGVek8Y=

!recovery 1 600000 /YskL8dFpnuRpfZYrCTVAQ== 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
`
