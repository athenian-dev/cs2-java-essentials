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
!lock 1 100000 alfy5Rq2fV5qZJYa9WwJPQ==

!q 0GEwJoiUyLhfYZ5ULZZOh+MMmWuOHyIC2Yu+8qWodS15pBefS7OyYjFslymWXf6BTRKEB3cD0SlCPJz3euf04UcAKtGS9YyEuh2BEcOXHa6P4KonBec+IJj5ptJgcFE5ZasdtBcfTzLnJ5npJTix4sdhZZxEbpfVcJ0/Kcjw65hnJoWqaqug3QRV24PL8bje+ECma3VT003T9dcAMt5S3rCgG3rhia4nT6nvw7XG9WUSEaQ7Yov+m92kYmTmEJqChBeR8miqL7UWTfn8uEsPU3mxh+TQg2mk/7gMbXMLSl9zZizI1v89eIDKi3UiyVw3JXkFk6PJkMbXu3TG4SNZdii7h+RNnW0fYaMtKabtr2//ggawfVSU47pvQu361/L1XQqz8V1lfgnZif1rf0CH90X7BEnErzrlGk4SRddvmRscR0iRcqpLgONdfJVKwlnYRNZUiOJnN0x66f/SfYFLCbHNG+GfrXKXFtcT1GNzNyonO78THZFBFlDC8SiCTRikFNKYfI56C0g0aBhN44qi4daUCKBfYwFielClZWGJoa8W4Nvn8JoAF7z5qQ0N1Zuvl8cg4HeWkVdQ7wa8FNQWa2UhjZNskduT1QoVoIVa3d6TanBc2SL4Q0XXOPR4RWknEVAPu6SyySpaX38Vj47KOtyq

!q RSXw7B8WzjWbv+oHUU6WvVAU4Xy4vcj2XQ7zGp2B3KYC99mBlDVU7abQrNi5/vHpMzSdErAdw1sHgSSsy6xfKynHiYufAC8lzTFOPr40U8MtTdqPpk2QiQjAWHK5blp8Zg52RG7R+NIhEB8xF5HU9ruFEhC5zEQupz4dc1HfZDmlw2OrNATP2eV480qt+xauoQbwhaCh+Q8RXpQ4JQiAEgbRBEN+vhGzzHM7LxLf92gZ3JQNfkdivMvJsy4nv9axKoDfTZyryX9XW1E8KxKv8S6TYYIYmatxXiO6mGemVoKdVKAnTN1slIc8DuvjlmTUV0wl+Joe0ndhCWhNKKGvwzpM3+v8q76HnoWxuGq/z5h+LZco9RwG6SqusZIStdKkHPUcYOc1CX+w/GJ8tU7UGoEmxLINBEOTxESWk14gnTKmClFQEJkyeoEABa7qb5b18Vcsfu2exQgEKtFVDCqPPfv5FhQefpuCnOk+d8wEietNRtEYb/AFOQJXnfMiAei421LrU147RRGYzpt5K+P83bL39YNdTpIAKoCRL97vHW7CwQQnCzu62hEdfl1hxVwzXnnZAwpshaOQegyWEROd/bWORClDAilbjHxMD0wRAOKOoAasLO4GB97gCYeXKRk=

!q Suk7WiCz9tbyhaTK15MacjjgFiTdXoTGTAzukL+yV/50ua3M0c4ikG6trZfK+pvcsfeaWIgjb6Jqd9P92RbWbKUXTO5kAQYmDC1sq6WYFIiss9bGJB6LY8KL/ISFqTCrqCPjIpEwFB5Lg+dMZJ/qhtkJ1BxFG2kcbwgOjOqKi09QqteT9GSaCwk+/ncE8cvJMGqtsEAuMNOn0topjEr8DaF+9NgkOCWuIpmnrFVK8wHPOBHGLQmPzL14RFNWJ0BwLRT1B+tE6vw+JReNSijAVHtnEXcRcF0WUzGyRLoYB1UNG4axZ7OIiyFszGaeBj4xb715P46269bMdR1+bP/DY2uirnkJy+bIUe6YKKv8hO69G5vtB+zS4DdBXCa1ZycD/RFy8z5ZNBg4dfI8D5UGwjh5+x9ljp5TGmSAQzQAACNGryQeJrDibgV5eggTqDdIdCMHxqtctKiSyu9xmulcOzGL8hhExA==

!q xqw2bFV3SOU7Wvd2LJmGe0VH6n0JbLAhaRro6PW8MoZ/iKXJ7FAYXTVNb+j+ploSXeN4+8vN70O/tny8I5Hgf8Gjx2S1z5jyO5GkR1sXBfdFTc4z3VXHjmC9PfAi3uzCQawn2qS3WCbTC4qL5bJQrtnOgZ9Ru6VTbrqX9QbwaiQZNIhkjsgq0RUSLso8dMHUGOPjlvRmG+evDMO8fZ3aHuI75N2s8FeJUKawZP8LLeGPWynXDjU69D2K41zb42+o16Jyik4oQ+lwBIqtOhfS+2S0IsS8zdr0k5K5vqKhQFYsHrUjA1P21UuxOkt2zHAmZG8zjBjGRjp/13jTVOuEpfvTyBHNgHb4142SGzFJiHrvjeYNisylM6+jPI+4WkOQ6vvz9/v6St+GrcaRnAy5nQ89PGjwaxCxDUDeKnHjbWolydjuKe0Zv6jxpu4MvvkR3OABmiFw/pvydLvqxl0fKrzj/5FU4jbxUotH9PkLerPA6cQzY8hDF8g6aXBASuUbWrY2waYuC7r2r7VhN18fQsBvubVE5rPVWGDmRUvcZro9TzU2x2rcdVgWlWWMD+JB1qw7HfU9mJ5PylZSFD/0GfgRxUnV/SpgRTRbme0NAmvZZ+Q4cgVTNO2g1shpznlbm4d7/g9f/kpUc7mrOg8eBjVBda3s24+1nSv6u3a6eqeon/OtcLJ5qWoYUQcvi0z9VJ+bTNsLAXwPo3KZMUO1LEDQYFfjIXuooXFWei0VsAKFR6ADX2BMWsr/tZ5HIn5IN6owMm4mQxMyBJFw

!q fBpqiNy3MDtCwoxiTOyNBQaXUaqO2tbY7VJ9pGijBGPdMWC6eEj94KHFeK4pG1tpQBT3al0KJw44ASrSII5zMf9BwFMr0J9sUnJPSeSGPFdOdmPiNMjWLJSu5nlix7BllvjmYBLtrpAYXjsMn/Z4SMsLABwQZ54pxDJoyZ6Rk7Vzi0TlVTIja63Fdn6PDRw39LDeXYp9f2QzLe/JetnaH07JX1WCWl+cLWGu81hxPfkO4BiyqzeR98FFy/7WmrnRBvC2527FttREssYX6/UNRMCVhpSaJMvsfmXPBfwJaVMdHr/IGOyZ6rif8tj2lTRRIndakfw8SMTU5rrtxHxUu97m98kLt0/1At+N4nfbIGzA3TiBd5ZbZ963lVSdcnEDoJoGbPTXzogDLwA8xT+xE0eQIl9RgpVPmo0F1ZH9eukc

!q sr1/5UyC4/xMSaKHT9W6Bc06/xhTBoXQcbj9WN32Rtp4aXuDbnizeHiyZIta61lX/DPmxUxKQ/1OdZ8yqmzjsjx1HTropLeLgAz0jEkZeFtyihDuFKAR6PZX2vvaLiBtZae612IphQxritL32/tDVFMZWJWhwQo30e3CTfV8JdiYMX+rdUOMIHKCDjBS56IQksvDig15IUCovNSPCsVWyc2Y9J0I8sH15xXnOseY7MckJFpeN66t7ad3NjWanOA8WXaZWA5XDBveiHsn9KLUhYJS1E8+IAZuFpMYq8qyRdOUAgMNNB2cjiEsCuPfFE6sZBjG8f400xGmQRcRXG0ZfnvJA5IXqlEW9k+rYZF6kCbfDHcPb8FLmkQmC+nr6Gp1zUtVbNXHe9iWWJ6MuI2ykEwYTYKoC4GVrZemDR3xVcNASCvwDGG3MjcrcZQqWV5URUJjdAlMW3l389Rh3kfCwPui0xkQVlWqvGcOOSpBM9SCOf0H7QWCgG9VDrvw4jc9WENVjA63AIokfLobo/jHMQnxCa4OZQ==

!q i7Tbn/mXDputgSIA3K/SK2P5DQXd2F8P5bHARGwFmM/9r9CVFSs8gx6SUADJn6n9u1GfddHx129dXz+bpYkPNsllPLO63oGuj3IpMRhFCfjVn99UI+KHIRRbTFpCyAtQelCuoYdpHCk5TUlGZwv36mvm2ycUgAIv+i+gjRU+IC3eN6bxwz3r1EfWrQY+HMNYxMHDiKYx0VQ3gw1WH4NzCWWvUBldTcE082UTl3xTGFjIhzcV0/MnNhA75Q5OEoGBLumze6nn0rixyzCjI9kNR3amNm1D9+yjInDuNQRfmyZdKo72V71/ksxeJm32gHLW2ijTarNoGrmtrcW2yBATrnAFUHgIvxekAjOW4N1q8VR9/BTol4qzwDm/EvNGkR0EZwhm25krq2TO7xXAQKES9yM25NFsIBlicZREgsmHg0s2740VQl+UAd9xZ2Nx3RQW90YBGU5pbgIfXOZF+k3qOBREjVc1wHoEtH7ea66khRfxiH9ew1OG1UuNUjXBeLC58QBXvHEUlhqJJwai5W/ENkLFOyaEACR4Qvbn4A1dZ/c8WDRni//zJqtij46XyznCidRiYXDrynazoD/1pQIewyA=

!q uynadakP3boKw2Rt1Mt6/+ITtE4adkwvhqr21Sy2QSTExsGCyBQzcgDBnox3qjVdMt2Mr0KClyAyUJmvwSZwRyZR0hYzSPC2pbZP0/gvD6O2hin3983aSEIgbpTJF29KknXH89aIb9H9v2i2m0ikwOhdp4iGSJLPvLpFVOBuAiO/f+C2Rag/u/zXfHvh1wtJF6bgAQJyoAr0bc58BzKkpMKelHYzFiHvieMnlsl8QdMT2dLTFA6Zu44WXfCbj3LnQ9GrZ6nfu70VrwXeU2cEjdpKy0Oxrw8Rrl5mOLAyh/ffdbROrxm9jPCqNk+/ct5xfcLbcVa8Ckaj4rdXiT0ncBnEit8EUqRHqVpT9+Wli13VcitFckTGHE8BS83hEx5578v7x3bR8M8BP2hihMA=

!q TmWdm6LrHR0OU6UrpECZdgmK53enkMXRJ2pcodKXD08YM7sZOIlqRpNWnlEegTqx2jw+ACM36sI3l58WMoDnfkQCQR0GkAQrf8ER5eOmfhKwaYz3R06fsyge8B46xBZgMoLX3Zhk1ZgsaczIEqtzbCnqBLug9eqkGZ7jr2mqY1DHdA2C1LontHdQElfD1NdLq4dm/bPYJW0hyZ1uWnE/wSQt1QEudttx3qBgnCq9ki3gDK4yxa1hBArNTTHFnXHDmN8cpXVWcPk27bJMnSIRM2keXgZo3YaYXKEhkC9czLmE3qi8V1qtlPjcdATl9gHunrIOxRQg3YvzTQfvJbzviFuMGAAXG/vzu9yBN9PL2wz+flx7PaDw3mbknhuRgn+Lsorj7jpmYQ5dv4w1za/7ef1wYZ7I3A31FoGBO3JffQAv7RpAk7eb/SgD

!recovery 1 600000 xYilSGfm5u0U/5jt+6QPgA== 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
`
