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
!lock 1 100000 B1fcUY9QGwY4NadOWZDxeQ==

!q UK+8vCPNxgws65qiaS2S+CpmQuYOsU3rxZ+llm0eKmb7e60R7gYfRjdyQnzohpZvTx0e15pj7FNqO2+2RcQ/51gPPH6n9VPhJYzRg2pFIVBXG0hp6xIwlwIHWaFVp/AGoHUJrHMD1aVdW8A3XlAn1DOH+Kx1CagImROIaZVIlwub/G7/ziCZmiiGe+es66VlsRTuBW15z87WNy8rA3y897790vkKD+Zy9HtexfWRihBZSI4Pgp09q0Xv4MvPJjTt1dPfdSYGxQ5hYwSHbeYdMpAfZzFb9la5DuDle8vGkHgiWoGSKITRI8EAbc0hGFdNmXoufULrJt0ptJaAXho8jOhKfjwpEzDh8tfCoNgFMtjLPIzG1NZYTKrPQbERGksZ5sBhPARlvlT22TNzTnXXjweMrKtNiQHH4H7c5nUC97o6p6oEzzK6rluONUIvfSBucLFmw0bES5h/0Huk7ZXyuyYOoKa+8Owhor75KlO6NB8TvKfk1ESDUx94eIlt9OyPG/0kwsyhIfNIBARqSTjDG0lMI5FnoVhSkJvdtL58IitSVC34l4NuDHyiVd8N2XDyK1sRRiMt6OeezAHfL7uNfzlXh+Ushf/awE64J5CGRMMSRD1ELNeKvohXuTBS3a2ndzJsbWuzw0XLCPwxG7UDUze9UMXbT0x3WgSsgnr5lCTS/qJ5b9s8uX0yXIemWiwvRSKX9kwqjk+PsFDVZsW4ae30nX3FwpCN8wCKg+m6xx5XVE8S3aGWANvK/fR6

!q lUNhxCzqPSp7YSsGYjWE0nwKsvmlmDr+OMiuZFDIenYOR8Ss+PdT2/02/owyo7Ynagb0ewar/DvaXJwjznylM9T4c5R4HLWRbmYsTsjvG5vAdoJ7aVsohSRmHJU9CwXPdL7oNuZ1ihABvhlSNR6RhuZKEpJcbc9oaf0IvnGBEG0oYpqeof/1PEcLXCaU3nTHEJvgjaFoZHRYNYwou5+AepHOHD88EPQTfM0mO1QnKwv60G3Q9dtKubW9zz7/V4aNk7sdv4EWhS4mrsCyXbmP3v5FG/mMMzJAv4XPRZ3MrnC3hXIfYOJ/q3RBneRMOiaSWwWdWsxzaT5UVOyR0/DDnA1pd/7O2h0yhtvyYJIAgmEGunF2x+/s6qB9z0eteqH0hVO0Sj49T/3jQ7HywQfIvVeQx8UpIw+zf3m7Lzd9xN0dwQmc2SbJR5u3A31Xis8SgV5AG9CeU0Sjlfcm2YwD5Fb12XSuG910xTKx4Yp3PFCcdqPmAdvvnqqyLMp3tMis1u7WHDcabEWek2RhHZSHGoowjZWvsCSBpc7uu/ANk5cKzktGCT0bZ3npWlzf7DtN2o9zLQk+TemCMMDvCOQJ/4lh5L+eW3VjdiJR4ycD8maZWpCrfO+z56FZ9noyOG5JOySo/bxexPn1Upn80s76iD/EpbcIwjd6Duls/WqVk87e2+sZiVtvrq2FJIDOWKMCKX+3YHSiLMLtdw==

!q prslGSxmNr0qCZbM4xervDUW3auJ9uxpLCc+8lk2O+ynhLF8BtL+URSRzYxlG5K7GkFYKAKB6f+ZgKljmjs1fh7Ddq2IPZghkumahpLSgaKaBpWCX3XMoK5eKR4/LBOpp9XlFgb61Oi4qAQ6UQVprdnBd7hDZTwHvSzme+I2OK5mGjqpLMAQgYVAXtxpm7mMoqhyR9/d2WOykwq7/xZAsR+6ML54RBaxK/oae9iHDjyq8BpTxLHFiYbUB7cpkrKovWZEAacP8jWP2VRvMEWLQ9SkMwaUi3dMdaEjha4vYtPyMMTh8r6nOVyTKPxTqwIpgjZDdy33OdKjxFVHNLcyCYOVFhdxZaFkZJ87DA30n95hgweYekCozX9aRMpy3dm1DVpGUJv3xja5eYRSpnleUp7NhiURBZmtoHDXADa8Xdd94eUeetI5IboEnmQ4+7vv8r6uiFQNcUigZGjSv5pnQEVMKeC4J5SISZ5gsb5cxDACoiqfavdMFAA1mN1Mrg8yt//NqtlaajltRaVDQ3PHu5rdTy6Q0RhtI6gRLo9utnrv9zIHy/TAln03EkNUkymNqyLJuku6Y9pKFVu1FlUppeuWbo9rx6Q9/g==

!q sqxRv84400A/W7NijPosKprpZkUVc970rpJ74XAGDRAr7aOxV77J9reaYIRCBfgVoPdLdgbEjmrpLWXlt3i0bGtQjOyiX5RRGXHvdnMi54VTDaquE3j7A0WQXjEFz+Bbdv+nkM6c67eO/g9b3ngNMLC/o8bGuYuhJQUrVH5qq2Vi/XzfqNxgivM4NBdfot5WDagMXYPedIq8KtE/6+HtZPFtTxQOVDPHOFyqPzMULBRkdGT2Xvr8a7Gte52kFfmHi+T4xZ7sd7KeJLgVjfx8VXukQgx+TIr7Yoj4lhD94HVUurOs8WPisFyflbxLYpzmL4ZWwq0Z8k6R7zwgH7NtLPmSc0xDy4nX3vBcANVGXhGqPm+ys6Igd7Ip3IAXaqu6K2O6uWzujWk0509S6FzXXYw0nborVqfYPvzRlkyr1W1TRCHY+7tqmbai5rhYZuJr8yu3T+4ASBOAKknyWH6EbEu4dYGpyLs7Z8LRXKRwgkzDjnESmvwoHFl04Lx/gbWEjrLxIaQ5bUI0xYMwFqsZ7+rENfXpt+y5FC4+9ec08CcyEWi0TNH6g9INzT4XPVpXG+6dWxhmYc1mnjMQ+jC5K3Eg136jlUYGpMCYkaxvbyJMExcJlfdYi/vfiziNJjEmNjcV03kaFHmMo6g7dECMXdpqPuUlzBe+yRrCvZU43ogWM1gxXkYKHJVpynfOz77Yppd2HQ+3Qxv9lTLmLoi6w89uIIy6ro+hiVC6Yui3gi60w0z+P/e4nmIpuPwWF1nZ3KYLeodRbLYulY3ejAdGvZcpnGR48SsawfGeUJ1fNPp+lwGfFwmlntri1wL2P9bjKXEOs310ug==

!q +5Tv9JrWlQXzs9/vxRTHN4KLsR+wG2teM2n407M+W5i8ngBmnNbxaRq0uz6/I6KDUtdN0X66pYyiiweSZnWckXzzz29PAKGSG5jN8O0+GhxcLnSbK2BYY56MJqbJsbVFFMjNU3ZEVkSdm2AI0O/CSFm5gd1stMmI4xUJ7y1rs4JLo79GbOIhnJdH0l2A2x3/XZZM+Fsyqp72tc5ElGwzTiodoNik93jH6hhsNQ+Q2VByMV9Q29+rC7SniweA+TOkLbfbvvWdxcVOiUgvyT/xX0dkVloC1g+TEd0/I72O+aGEY3LRElteXOq+uRXklTfb56WuIqJcQzgLEmvsAw0zEWG2fTpQ6kYXoV68r0dV7K0IUaGF7nglFhWdK8M4LQvpK2I9D8tn/kRLlJ/X3eeBZbV72h9IQaHLjMECl0lMCI8KIi+HXLX0KeIuguXeukaiDwpOFLiwP/FkurISN4rlwkPmQt83eUyJa8iD9cAmG/OXUkkljd1Z594Win5tx+tR

!q 1aUfLIL6/GL645W8Jo8tPtKMQkcJLG1p+JWoCqd+Nh2bs47jsxyWQtvJxtPRkLeijdxvI/HW9zM9veaX2s4zYOGQyzyC7XmIIzirngf/dYM2+nuU0tpdGZNK5ROnQszHFRrBBJc5GWOu6KI0EAb166vD0saNIVQZsDhHBcXgyp0xdOA8VdPIF1jlCcQbKL+nCEUdkdIOt8n4RO7Ktk+WN2gHuJjEczBSUIyjsQIDw80DS/33Sd2hboVpjO0GGEzfrueeT6RHlvxAs9XNKhaJH3yir8MxA//67PgUJar77RnrLuoo3WKGe5sle5H9GjDHjIq3li4wTcjX3nDNZvB0OuQVeNJi+2IxIAle0QgaullFAWBQBEGahdbiFfND39mC0UzQDQQW2jbUHWbDiaMte4oU1gGyGxGIo4vFcX0ihuhrz6qKjhJkjoDO3mbkL86WVDKKFKo9LbDZ4ahEFyg3ecLJEPzAL/9AFn7rwMM2z55jEtAiXJE8e6Brd1fpQUA0LTJwwEBfGsqHEyfn4KDZ9TdriHrOkx1iqSUhlcWSe6n54+D3Eo4iwDI3t74XRw4FrHSzhBLYKp77YL8F0KcRg8716nbZA1aa8MLGa3gfuBZhdc66UuPycYFGqGUpA9xQUPKZ9LE=

!q frxLIXtG0FfboJJnLtsFC+oZ2GMjIGrNq5l8CZsXBM+axkvD+eeYnsR6uqcGkyDN0bIdvJr7VVhX7vs18zk2z45ul2VrNoUoN7Z3zRAK1HqLZuCsHhpZLxXV3iRphegbLSvBtDwUBMdvoRkkdja1sUUvuNU3Nq02OnWOqQrsHpb5b1VVmkiCqw0qvJr/YwDf2iCkgaxmr0zgCCPgQvIYuGRbi1NUOFSQbDENmMhM8HGkmjxQWwX39SDl7pb2wJ5va9UjeagqkJEPvenqF4fsqkCQVp084zHUHfJo+FZ74KPzhOXLmcVUSKnZzZ+KVTIuH5DCt9RJSZ/XBZ76ofhLYC8ZPQQvwWmfFQmZvewptoAsfEAFkn8VUupX5kT0Buo7F5uAE04hDaRGUhX5gurW4mQ8Xi/oMmsFZbHDC7H445b0AdC6TvdmX8RtvldbMyIyig4wFKO+w6U29XtLiJuXD8WI09rSOgdCQY1NTn19SGw=

!q N8lcMio3v0rvBcr7747gSNFyemNijyz022VQOhPesYSo9jJmHlkLPwMYj8/McYuWuK3XALm4nAjzQC/ww6a2vNDorxoRfzCU2BhWo51v77kVT37bIBTs9Sz+BMe1tbgO+7P1i3/qcuY6pANk5rVaUdjPIys/GdiOataOqYRkIYJulIWvjSKvkUXwv3qoI3NpiE8WtibVb09ycxwTumc5FvvEqLOFEIOEZ+xSetKtNyPty7YLtgC+VJ3zD93e5oasEv/IYqF20j5PK6LUBMYy9uWVKTzVBJ05VMFS8NNr57Y6ZroDmrEB82DhWDn1IyRx9XSFx0jA+VAbkS278lSIa6Uq0EYGvr5Q2MCDXhOZUPyflHj2ovPvhbsfetbJYG9pw/QjIv7ocshi7DtZiIIr5OjfctTJXNjuWB5dM6Ew3eaQc5MfKEtj2clv5CzP3VlGiIimgykmPjOh4RqQm1F/YsXboNlnbWaBKKPcyHxLwlFt6Xau30whTvOw37mEg5lxXq2fT/jHSw284xrsCNUO27ssogbNY+sXDzZyC0F4CM4Iics5nD8dikvjl11vnBySjiZluOlP4Veug3rEbPB6gkht4ZfvzVfbdbCkg3NZJerov2Jtkf7UyvRzWLomWF0p2szruqSU3MuHXSQkvSETxQPhajTGImjZmOYXHw==

!q hdAXGcLNUrQk4P4NecIMpWmNo1W63SwOtnhAgZ3ubj+c1WG3JrEcHStwMp/Esj1VR8VfgghloRujpgZnuXNB9cqq8reTszamPUIb8epsVLnRFLlj9mifChtZc4yPrq8pIupezc2G64I2XDeG81uVE0rBlRIvUqWojINo7GfzioSz0vlsIMrTYTra96iO0Kbf8aAdII2Yrz/I7HgZ3Ww4X2A/YQ8iNLxmpvLI00yg9vFEjmX/19JUbxesQeSeU/Xa9attQDURVdz7RAOtoWyid3SZGQ+q0uSWfcg5IQKe07Rd09rL4Lp8DZkBDOSSRXdq3Y+1rSRR8uKsWtslJrB95b1PaQAeddQUMrMf2mvb/8g62mB7No48/v3mdypQ6EOjrKQST6ctXiK7/nsa37msjEGdBZb7q527pHPRDqCMA66sqcDhnC6iSL6QTAxhh8F1V74PaJvxpM2UleoaGaC8zumRebFCsIz7wk6clhvPpoDqYa+/NovV8kVZheS2IXA4S4avdymoMcyo

!q qpO9TARG+xfD6AwKIM2FS2aCf9cUIDCdSrWc8ltiKWd8YmnVfH1MlVumo2vA7i1Osu+cNs0UfbvKtfpG+VNMpsVB4Ph5rSBI8zUQjkXsF7Et6eYPaS2WRLcq2yr1AULYcKcRmltSchyE5TfYOgItqM5e5kJWR2H5rs1Q7UJ4DuKe9Ke0j4wecGuh9mL+UGdXuSCr7zdcrw4AQwafeFx93EOCUQzuErBSY4TgixGuvxozqIBHhJ4FiOmxC9c9kcp4bGTiflraLhUJQXw8EsWlJkhtkT80lnzGHTqkDP9DoEOZtzlD/lrEfTSSYu2bjTrGBrKrdNXCuMA2aUSVjksMvQkMcPLpIBI/kjpJRQ2wOJ2HkzwBa2zfzUN3/EE9WiRsRV9doAyMFl0DKYQoaOK28L6kHOKrb/8Gajr8f/xD6nUdmlBaB2kTAeZK9YU2VeD/D/20jNwQ7FezDnxNhnImUWgtAV8YUGxjkwKnBBQRbYckH28EpYhxxF2ece1mXvYSNhyOTy2yHxYPlmkYLmoxDbjzCjkpPAtVqFTMryY=

!recovery 1 600000 hlUCPJywtvgyJNHhk0FjmQ== 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
`
