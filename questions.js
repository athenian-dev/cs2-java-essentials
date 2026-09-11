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
!lock 1 100000 NrNwRFjcOfhPUpTXRcRjLQ==

!q M+4DDiMX/BYLh2bZXiNxYlLKlaZd+2INYMe2nsSJRqFRjl0AqyC1/5ddIuSiG1Ebds0qfrBk25+eqB3J5sdHLAOQkcWX82tVoGSn2uzaFeKY3E2ZCvBclHQ3tLcH+Zw7sP46UKbaLQzMxgt0z1OtnZI1vtcbe2TFLU16ZjmvhBuwTyrP8+5pvFsrA5ZNQKtPSfxiKUXj5Q8LwYpXZpxtGpUmpR5Ia8gWm/Ybls+uaAHtkFC7TKXZaDvWuqsVl9BPfO39AUmpQ0mX+gK/UewgG48GIfRBxlVpF4jy90i6SLzE+iuvqpaiEjiQksZHl4dC1HISDnWLr7ACVrhLZVuoJWazU2/qnpb0F1aZh1WhMdvnBiAAONPjLGKobAWvMgVNgLOZ6Lsuy9LS+L97fkpO9XuUv4hMQMsCSVrbfhv2vIEdFUcO0A58NwPm1teO+0xkz+tf5WG5EN4tyKTpD6gRmP+63Aa/iekmRHe9iP8gp+vpSKiTmgdkNf5rXm/FxJ1TdIG5xPM+lwZzy9+7lP8Mx7LzeOmRV7GGRmiTWLp0ZMuFku3LPhy9AR6VT2cvvtAqKqPtaEnKA+z6j7dYY9qzfOh7wpr8vd7N+TnH58XP/B29KiqjGrKL234s5iAKKZ53Ky9vSu7Ov40k1pUiNon7HvV5k+8x5jLUVk9JL248DbktkLMs/ar3t7jm973/fqCIUUiIALM8vIuitvxAyfMRI6k9t6bXHXxOyF/eABg=

!q Qr6htUJIvBTzE7lumNeoyd9YvixCfQWnDpX7AKT2QgmYaFQkzfCF2B0aPwqj27TVlgt4sxKfn4zrHEu+8I/H9BJN6v8zHhWSWq5Y+jRGohOQlCYdWGv408g0EgcTZGWI/zL4rRZPODsBa5KR4Wn9qnnjsAO+/SU/AD9n+j/3OREZxZvyMduppnVw/SpFiRHhXURSBqNyTLJzrU50OzR6nGZpEutFE5Y8EJa2/mfKm05cgfbnGEmUUgEj0Gn+WlCV0F3kOafIAh06iEZVJ/Ty0l+3rNPS5SozkUJ2Kexcsq3wCUNMI9XML09ZBroYmJ+a7Jh4OP3Wh7r8+gevVCc9f0/ta6csixr7PgCFZAVdde/DYO6FaSsajCP/JUB31pX+m+Y7oDyReXWXURHKWFN42z2E7duTmmqbl7bEWwJHS2PFOrMoYfZ5hFAwPwNYcekHpxAduHFX64Gpivwzh6rRqVF+UI1D5NXqK+orSFk2hjrAluXDja4z6czzbVM0Rmg1BoB7kz1NT5ql2UZnlqay4umpy8+YvwGtW7bIqQfvKtqE+qOQsaHOv6a7BrAmuPuFRTY6bLIJrD+i1+po1JZ1NUMuT/q95W2BwvKAwMKwjFBnUcgyoztG/akdzIj5jF0VVIUiJB9nJM3hn56X34+Fdm3hX7OuCbmjt1qFKo6wOOuukwoqo+2DU+w+BYGOfGwdf5nRr/ENOSk7jQ==

!q QOL4Q2U4VfQnCK6yiWZhBDMCKlM195s+f2K+q2zIj8Yxr49MwpkDqL3A3qZTPa47NDKwOcHcG+mYl3yki2GHwZRjju79r8sneFwYPpBCiFfJkFgJi1SOMZqm7Rzx8WZ8rc9KVLd9VlB+mtuUYzXV3KD3JqKASAYJ49/GSvKgp7G6UuQ/McqiQcWSKqNZbQqdHla7NRuN1GEkqHwnj5zfUTMQk8ogvhX/T6PqjZ4RGSjBqoH5BUW9+aNEgBAVXsYtfnlCpAj3Ck7rFL5FD6tjAoSP1bAIrq9GmF+iVy3QpaS3MoBTrJ9Qc6XNdzIW8hGdSBUWr5HR8oOffqZgU/NabzKsrmJ1SGPsFh8iV4Hl/mhdN+W8dfPm/Uc8trpvxQ6zoN94c5GmO1SjYS7iJRGZbUXJ0NyX85hfN5UgTkM2Md68v+lNQPci2FqAYTRa4Ex0B+TfJNdXR0jriSVKmrz9lOLqd8z5ahp3kzxYG3Q55M1VquiBIJ+E+IFm7ZFOmuacTsM/EET92Y71prZIlEvdFhcK+ZC5z/1VFmQxt0vImzGp

!q 9mcCJbjtDhntyLw1A70sazTAJcUw6rSwRQp/e7+vN5/9UwVj9vPpNrcPGOYkeOJ/qXIK6klODTne9vqGOTdCZylKXB8suwAhKiE2zqzcL3eZUlZLXHuT2FRMXgxKWE1pJ3NkNtOg/MR52k8DjJb+dkBe7EljI7x+OQ0PYSw3Gs+sNU1sXKNHaEMVkMFd1pWFHeKpKmixfzLwfA7bzFzcQUg7PnFROewGhHfu3FgAdkA84u+c8CQWRVAzNm/uUp+pHQt98Gl44ljFKcqpd1dlDctjaAxTkYK1lch9nN0kHafyIBWnyHrDf4wHbF5/MbnI8U28MwlhOUpMGkRP20pKWUUdrwIqkBsZkg8XXUPkC6vC620ZDYK5Dpf5D8MyGWmi+LyOkSkR0/KYdOL5NkJk5kjP7l80oqLEyEyVoygAtW4v0Sl/Tg1TeHyLmlU6/Xf+SMOrvUNre9sqXRyRk+HzacJflkCMvE5kt7d5TQUJ0nnSVDRnkxf00HJJlD/VGnynPm5f6mQCXRg6ysuHTIAzSvHUCStTI1UZJsIBUZgTezjQiknsBNwl5bLEr36j51XEftkJNct5hxpLrTsjeEdXoqK9bfk90hxL3gPXxcbRLOy+200iGtfYzFBTVGHJk+JCvnCkbdFi3isN9sWLd6bT0Cjp+SOZtHIBi5dRWqqWJU6gTO0+Md2jXMOxI5qcbxMNqaI6+12p9QoIfuyeiC9dA5Fv3lSunR4eD6S3TygJOWB3OhH64F4MoZ71QAnuc8H3jKOVHofcwZ6qp9FnAulq2Kva9KmgpUvVjg/mUgm2Ioe2yk0hiUj+aoSUfj7Q6LizZY5uhL63OCgvijcXarax+hjN+IizTW4=

!q 097o28eKexHUC+WYcyp77If9tn4alP6MSEGwkvOBruwJVjwzVzz6Mj1HqKeSjc6O5yJnme+PK8hfaQd44/pl5LOQhpAYVZdDXuN1jyLvW3I+TaWDUzRGlpVt9UiQOSeS1vK66l6kEZQmBW1zfSTKb9xANAGocSUUhZb3lJWNsoHF29oyTbp7vUHt44TJXQsA/VsIvUsMiksRB3YFRxizEBl/WTqG5fDZxQAC6Ca3YNwU/xfr4GkktJ531zL9PkE+eAVFnQReITZlznualO2wR5dR0PXTc7en58y2SigCQ0qbpJHV9bIiLPuteAPEFedoCm8w5QNVbrY8LF0+LLikYpNQYdq/e/vyhCMftonjJ4y+Ff9SoDT+CqTfKOP2+fl/GbzugiAlOoSdkCepc7PNTtZ4gSkxEC2qsXyA05j9tQe32p9KeUOlXce0TbEBtvwHRxNNyaI0hMGGoenxFXG99saTQz2hp+wTr40BXc5ziFSSMc59EBev8c9Fw2U=

!q Z6MSU2cC5/97E22JlNcEaKJvSAC6zE/wkgjO62PjjgZHmt4AAXl960asaizQlYeO6B27xAfPOQ1koQwcDg9aukwEJqT0afcb2FNj1SohZprJlteU/2RYXrLboP0UKSVo/P4robo4J5FwkMIOm9EvWYQxSL14+nuFJuBnUFVsqmT6BhF/6FKj+prYDKlOAz7ILPzTb7Yoyfzt8b52oeHdifTMIUnG1/rnV38D7RmEGHLG8n+R3UUAYUJDGyPnvXR16AskmukQZPz2pUeo2TWy26q9FWuiQuyuQTfKzU8A9iy6pvfxlPuKK8azEZnwAv6bmgPrzLLV3p9vD+ddHhPOfoANP9Ft3dPGLZvltM9zpddrhk91euDX2V5+EyIucuo9ddgxQhyRiCblAdls2CPornV5UMxi2T4XLl0HvP6w5eoiKC+wtwYdnsi6u+Q7/Ck76U5PRxbUDc+lYLdGWRKwbDdzTmXQWqhFU42BKWY1MNaYZA84SBX1ilwafZIE9w8b83GeUsF+gKd2MwlwpZt9HV2Tz3vssX/lQfsqZGJW0x9fAEMUT29vNGagnIi2uZ3Cq0VX1D4Xqt+Wtnl3Lw6MF6gIJU0+Gc2/csz6Kg/kvA0i

!q 7A+NJAm9bpB+fO7AjY8pDfmKCbZzXCCkwIlCFWg2z3m1fFq0Y8w47VbMs/iixbLjydxxWbVIm9ZxfohScZ0r9txNIpPojXmb4avI+WUexdyj4YZJ2FY4lFFjyDlbXgG9JDLoNtgjiNvD92jg099J2rHnPvxD48KTpv8q57vLysWELni79dtBU0/A4SiVL6U/aNG66kCxzUKFog4V+P3QVTu41WRfTfTXsaohE6V5DPKtXA1Da4+yOLEG3lY2dgtKvFlqf1pbFUIUuiWwSI4t0MX6fmgorkKFfHWh/G1j9ordPD7m4I53JHbbSA6Cz4U2rFlWbd5inS1ZlBFKfrp09tsRWVQGdIXuqQAnPaxvNlHubMe0XxnbaREPXcatpsJx140ibjKggnLKTFa7s6ZhAnKvezYmUZefv+lqh87VlSBol0yKgozG2zxY5vBzzY3EY5oLEOoQH5cJeMzIpIMUnU/fXv4dYA3ZpI3L38R1JwfpxdGX

!q KriimckNrr0vMsIh1PnJ6cNW9Ri3yRPs4Rz1hac33cu4ZQ1Iof7UUDRjx2hzjWBP7+bIU99w5C/nqKNlw+wP1zjCI2/JmveY90wqyT43FPFNBcwiAxJkTYslsfxtCE7Zb0PbUcQoIEEQJRk6bHpcl5dAn6YftzfbVZ+Sl6BTsCCZJ9RRt+103DWFpqs24i0unya05ZG4gD01nAjVreo8nYdviGiksetjb7gkubBrhjD0zfjEW7UHZVMlwDukaK0xK/IbkOjkH5FepXDwt2bFQYf9qw6UREgWmW9L+idpDkbqVPHaq3T/A1JQGiycFHDRBDBQSJoH2YuwBO+Wk81h/I9nQB3obQnlysLhIVMpnEgCOEKSSNWMmF1LT8KD/lnkkWNSycSi8zCwVpnKrfGwfF+py0FWzwAFy20GT/PAGA2qs+R/EMXHI0B+5VmVm+e4J6sIkBYozDiiSAB9Au2h75Ru/Qle9dVNF9uEjAFm1Nea3L3joA8jUz7w8OEKjAZw0VcptwBsysep5h3NipigrnU81N8MBA/1IePi4w627UVZ9Fdro7b2t1wEwtdAEacSTYbWm5POwHAc3HImIduI9vc91lYEOry+JOad65wF/XaeMrJKSWFk1K3w6+9NFnfC1+WIGaiY9QD2ksKuTtHa/IBUUEfF5GUE+kGc8g==

!q YsKXKPMnjZSanjz7UdxlWH+rMrzQg8dZughODrVg0ovaKcH14TWadtvX1ANYUuUKLh20O+KxqTlUHZB3EteAXzcW1X7oVhiahcOQ4D0izfRxxldEzIvmR4Ugpecf1VdIIP4e16E3eksQgn9Tt8ZHR3j7MFP0q+8GbVvkQtqJpwMwOXIX1oWEWXiuroBkhklRJuB1CB74kNd1cPfOKqqlMDdwrSBdVco8Zs1NjSfPKaFVL0odndmfhWtR9W0pSZ07097sFBJ6fPv3Fq5IiJt5c5hStZSse4mNlFzkKO4ddSe0n4poyQW8KWtIwTVbooAi165zxMbeg53bFP1dz+fXKopNurciNTHCOYL6j92rPaZtx0ooMPkLrcixBo6i8MDcQRpsxAxkS0MDeQm5jkbnY1s15t0rpncVvAZII3Zf815mLva9oxdVQVPBklU5w+t+Ao/Q5xzpO6JlNsogQeZl1dDx9IPtMCKTqA==

!q PJaiAQVdiZu5hMOx+0LxMWaGlYzq9z4g/t9HHF8Kt38IqNRbkgnKlMcppREOvvq16U55M7wa8zujXhpPcHOEHIUT23sCDkFh9IW164xGypt/q68aruIC19X1NTpGsnJmcG8rx9m3dad/ksmTlP7SsSfZ8KfAOCzXqfqJlbzEgG1WHsxcsoQ63ue1u4i2KaoHZeID3KWb9FPT640w3qsgyjqcYbi0LGcHjKONAFKRmjiD5EOUwzIg7LMA0p6lkGxsLnkFhXxFt7xo9dWh3jF+ZvYE939LSaozU667A7cxb1Vr8y4wonpJjjXbM2q8Xb7YYki0YH1RasdsbAOF6I7TK632M0hBGTdciUE39uCg0nIQrrYXh+i2CPucIuS+eXKCWosnvz7fdZiRZwjySOaG5br2Nc6GXICdgrA99t03a/mjhBdVzoLuWr3PH6//jmkdgKWT0jUMreIeDol7yCkvGEBrS2clrrHMYbYW1OVBiFSLFSU5yzkPWHNjXZBbTL2lQm9N6+XDQ7pLLReN0j5Ncc3taTba

!recovery 1 600000 YnfQL38s9KQX3txtgED4qA== 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
`
