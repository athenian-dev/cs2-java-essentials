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
!lock 1 100000 mvIKe8b8n8jUjmn4E1IPog==

!q P0o5hNBj554jw0qrI2fPQ0oCMKThYYQ7x4aMotY/gx3IzB0xwknE7cjbx7mgDNHMxqt+EocXkf7y7438WZUuKXJ9ROWDyd59+PGSsbuUYFgMm1dbzKzG4FtXSbDjkt2evkuNAnNLQBVHhL4dkSmMZer1TbtntraZXbOQH/mCWqKA+ZkRa4Iii7QAk9mUAv0p0suIQb+9PH5SClc+XbAw3j/9fNCzGbXMkWjXv3Fr6cRpwpw+Zh/ZFLaS2ayQ8NuTeBirRcDtAgrduuPB62Et55S2vAfAnBzTbdXnaG34Wcq96Hfrjs2xEyWNBi3ejDsgvEpqWRpvkeEc/4JPrJ4hZomtOL0hGsMcbZR2o5CDbgXPa5cNqev0gsOG17RN/CVQPTZLsmdhjKiwhm2vP+6eMsMJbNlClssJh+3P6pJJRoRKm+Z5Vn4JLu8yiQ6CCzhyEMoCr/FfNJ3ErbWqM6kqhMZcjV1lpW2KVZKi0q2UD8rlffZYbAQJ99ipYPIXIUulRZXtraHe9sCsOTEi4ae/aqEZ+tJyt6xCPM2im5mdJnRWbeme1e+8THvRIdVAaMnCVCcK6Ww9GEnBTOZIsHmCO8Kmqt5eFktVZ6QXXetCmpHDYh7WN/PYE6Ln28ORIW1IbYPDJK/xg5y9hSCRq8WQITdx4Ks4Lzt3v7GEs4hodWCnRm0zUpzRlDpSJvF+bOthq+xzdtrLDWXMEBBKshYhVHHbU/G+VfjuhWz3KA==

!q bBfk9c2XSjXV4xoAcPN4gYsn+UgENZ/uuPVLooepbXeqTwliGqlKgwIuyX5aA/7F/nh7k8ZHz4dKkgndGCkeu14thHAnukdnZwM+nyj9Njt4kckwawYOFEb/9nEEHDR0iD9w+mCPTsdbhmTLPeJFXtuN8Os7dSIWlg3pFUyvcbFjZNPcUATONGp9QKJsoToqp2CpVnvJXv/onesAjqj5Hhw8M67ujZjUNECPWA4OQ6qetFKR+BH4R/jwf+dHTVOAQ6TW4EIAUfowsTXYcdju6aJnQo0eNpE4PQFmbm0bEDhqvM6lkhFc+gT6kR6YptDeN94sEJ412Z52CAwCWfaJ9Yb02nfCex85IJTeADG2VgcedmTn+UCz9Hi57nBWmuxIhKJCZ53+5HlY3No2gAMt/jOHBSokUYxCcP7so+TPJE1g1HJlGHW+Fttr6JUASVnxK7IoHIc8AWv0f87dZemWlkLKbCVtRPKDT0qZQr125g/RGYQy5dlHjlMJ0ip3QnqUfwc6IgJlIh9+M6oyY4rEUIQ04RC2pcEEPG3l748x4cZqs4P+laQ3G57fApt9hASnr10dZ2V056+PrsFEDSMop2opPePtuvrIjxwIDUPwFJhORnfkOW60Bb/ylMxSz+Bx8NMB6jeKW9G9BQFJMB7vwzpPL1v3W9yGFPdP0qnkW1KxYYo05kma1oOw1dfC5vJBc9CF5atohvhg

!q a6Ue9aTDtCLydPTvgrsYwV0Ag3Tedq4SIofCtWAfNoyDL5pOPj5mmCLivGpgxp+d7cqt71iV8o2vfRUT3uZpasQLYwE8Ecfp66VF/KUP23CCNbP+H1+SuiBbP7sYAkV38UJYLOgKSWRHQ1pdnGMYiUf+BkIrF+MRaDyj6hirsp4EBQsDA9Wv0S56ahfkjJqolsPopd3JDT9wbnRGhySwL0Mr5RsRozXyUFu7ySxfdhVlIc8gBBbmbqEO7qfhIYWmV2di3mzNgDbFAom/UJBtNX+NoyDPTG/OJA5DPK0ZUhbGcm2H/Hy3Ql5N1tuV77DwjrgfTqapeati9yKqb7hmvAeYQwgra1KsLtRf/csG+CRcVFoHLHbndIxPSkjrbQdEl92KJXIkUGeXRTwMrpxL5hDE5NQmL5a3OXLCSLNsBFxHMc8/MoyRv1a/jIsgmTZ4Fp09RO0nfOltwz9DBow/yzD5+R8Sg72LXJTG9ny9RfBf57KfxIX4Ify6pJ8zkC1FRupRmTB8dALAnkYJHXZQR2AeuR+uzWPrwbda+d6SXjU=

!q Q4H15mNNyonX9qTojriGsuwyt1S1iGyv6u9kb13wRfTgnAxETI/P0wUiz4rUaj720i8d0GXSkOeKpFIDNtAcBQQ6UPz0iK/WkBO8CtAfZg56hIA/uRJRTGFheiJkkgfiaUn7gPLl2xcRDtaSwIYycmymCW9TguBHUdv4VMXAxCSJwRaaYv98PCmRwZpHP71yIZM4XHiLaCEyYYDuji3xHgtw+D8MEeWtCc2cyABrbpcJST2zv27Iz4keX5eqjDEo1DoCY63YghWrMGWUWE50Ysd312hctQJwOvO11w8KtQHh2BBnZEhc6CdAna0cDT0zigrX92HUx1zavTjyZziyQkmmSWh5yVmOQWqG6yI8n3N5MOtY6ESq/mBba3dzkmolBSWJ6Wx2ysXNyP9lO3l9l5gFqZgTsaiuO6TSsTwKh5tugTRUhWkGpLMpDBKCik58FCOVkScvv17NI8E4DaBh+0Nd6IXfKlfcFAB2bVJiG4V/POOgozlP73EJmcYBy8PR2sYuwnnnUK58dZasVVyb9uS/4qDmz64uJUWYgMNXpUOQe5mgPV5IOvD1dpUp6Hz2jR2CFhtaMPN39bQEyCPU44nDk1VYLjWOcoiLWcCjAI/pi5IOlfdDId5Tw7ZibN0/VUeouy961U4ka+q+MFyKOU5/bIhNvtxBJ/yPDlXAmC8nCW/o9Jn7Vwr5DK101aE4D22SqqGzh+7DMvOxXGu50K2UPJzj9ijLGqCCeT3PiLVtCj6CKrwMSw2el79Bmje89UuLmGEqpsp8+YwAVfjRKHkHtEbIlCkeFGTFZkwOIT97MgEaMz9ar+pfCpR3Z/ZfvYHLck5vE7DFKvMJn8sNtGYsbuY/Ew==

!q KVh/FUr1Gg3rMAab1mIDDHiZADcMtEUXN/dCg+1lFUeSSu4fPPHlXqdm95EQDrs5HQ5eBMtAS3ZNqozaIuY5vhC8mxuBGEa6IEwnY4+P+/n1rQF6jZAn7tylFYaYd/6YR42voj77yuj+6DGZ3q2lW4GqkeQWqEJle7LIPC/rm93cyrhh1F3l+ProPjkpdjLwPzEPgtszO5vI0rvclF8BJr1Pl74h0QFNL/6vgaLdy80DrweB3FSm/QOgb9eeFA0g0RdbOIvgo/j0JCl5er9vk9TH9BWAKM/TCgPyqYWrh7IB/i7SMcVnwjN+p0zgE6PNIrnULIx5uuhNFPIiaf0sS3/15Zw1JbreslnprCfkLcbO1yUURNfnJIruY+3ZPXOEIuXjOyxSHkyM1D9xvPyoYwkaQgLM0piKLRL4cy8vITIqZQ5Olux/Y00Z8nQ8cIPq8d+yPWsQHQWXzRBATBFNXAIk+Z9UqR/fMfJPZaZCp/c51M3tZxCWVHXkpQ==

!q K6lqUAxQNXEW5XCva7x0X/KhNjt4IrzF8RBjsxnLDSy+bMeY1q/XUvedZQQYE+j1jpi+6TRjJkRHSb1vnn7C6ZTn3P5L5fXZsOfzc+1Qp0nWZhegBNt8SgWxoF+z/+BisG6eeg/6LCggLoi4eZnY58UIgMYpKhRENEx5ku2n3HDX949NEtrW/JaU7NMv8VHFbOr1hBDianownX1qkbWPATANN7enENhGRIgM3EjdMuuYm1fqqLI7S+VnpcZAnvwTGREA0nG1zSsLjFQPn4EVSYinY20yjM6Ijhm3k4pwXsW2IAVZp+NbKFtDba91COxYmZ075qU2LuwlX24ghqxxnArYIqf6gXoOGJfojH39hSnbmFJoW2DjJOCd6yrURPEEDHgYLKC1VatN9xNN2DTo37FbmLP5d8N1jQiUzb7cqSmoNHOoxzJqzJWmJobiIdqoqDo1YHlXYfdJfCJSnCSwzmDLKCFm7rbyvdZJCRI8vBR4u8VyOvxPiSCBPJazZNRloeNvr/u3iEYHXfUu804tVB7uQVDilNjSs1paVFtI5An/96flazP7OJj9fW/1gzm0CypXW7yObOdX6jHNFPVDfJs8IRwc7XUNXWl1yOE9u3k=

!q MzHSYjgBeG8tLO5VAtWXEpd5JO+ubaXFEQFJloOIG4+sdxq4c4+EZmADlNEydBZcAtmzobkAvKO49RNz82mHkw07ZooL+SHOep++5U1Kgi8kLPEqhWqWqD2m4/e+kr9rzec1S4zXuJDmT3Ry25y/er+NqbziVBHpV8HIlVRdL7jqH/blCgtlpoYLPIpfxTW9M/KpOidwJrWGTirDVKtO4p+PgckVL3ovzZDn8DPoS6LmwhuyBm7ck3tNeeIxoMFshukovZhdwqu9MfECtrAbqctB4F6xzk2ShGexszNAPTLHfPF1g6tTpD4AFAzUxxJVbgf7v82VZV/2KFvvrzDlEiBBhTtSMvhr8sAaBc3aSNUbp0UNIQdLdOSUuKZMjdwTOaBAVJLP++Bxt/4gj/wLKDX3egbxcTlIaPqeuJY7osYNoOfXUxGKOzKmyxEudFZfnp2O1oELbymGHJQcAf/nv6Bk+YOwxQNuvGCultQcSHijuaY=

!q 7X+uB/3/RUqWfBxHzg2Q7x4ONq2w00Fhz++eUz7v1ivkHRGTIlAqxLF2WfCBa3RHS3FqVycVIDszWdgyeQIGScCJKz6YQq61aTukDIx3gBucR+EtgflW7WF72Ne+ehMtuO4uIDr4xSPm8uPOCVJRvND5WSgS+iDXcVKacetlB5qNm22rn+4qEddpr2IxWaD1xOi7yyHWhyt5kgdBrFG0mFMS1m+lFKIvcN8R1/X9pbYcyezDhmmdvEJD08y0bwIBFg2baiGmobzARLVu4LqeUY6oO8l7ezZLlsaN5NsofAYKPOpxML8Bol+mnHgiSnrrYlqDnTUdj8/4BerNMbYEPcH8ZC7KYg2nriI+Fd2ogXpmlk6wX6kq4Np/hTL1t5w0Cn/08RnwWicLBjUVaBjahGHz76z89ucl7ikQSaA3rMuYszCgHGIOWVakbF3M81uEjYughwC3RUv6TOZnkFXwLpjVbUBm3bBfH2t3RyjS1uiSCK0xrBSKj+9el02ds5ls6MYSP3SNoH8hVh5U7MHHeyfUpsXdWK0NYhPdGuo7HoPBpmdT94iyk/N7RPlPdIWDJcrfkzFSFTHQGEJuA4e00kl6CTiFIUksgbRAQKOeZbezr2e0/Fk2ttpdMK/Cbj4ZgpSY3B+mPGFyFfo3mQ5NSyv29eFqUOOJzTco

!q jUzSRteh0RpWIEGsvpbVFbhB0HqcNnvkPXf/vKaffBxOTrbZk40gzCL4LemL88PWZ1cXUKf7mViAb9ooa2GJCLv2mnVYGwPpU+wp028QW3+/SP1y7z5EYEXsIytCOOa4QrCeaL1fGqzbaqeiGkxyn4SYv2NujtTUL6paoaBl/Tv6P0sClqv0dZzQlFhzgpP6zY0po6Cgiblsbfos2J43sWuiCJgeyU69elMcwOp5nnSprp+4NabPjFUR+z1PfxfmiX5JIYgdCJBBQjxoe6M9BbTTgEm/Wpjak2Et+trRaaRs8E3dHUYU3tNZhU6Di3uU6MOtklf17LZoVqM9N3/QbNJ/gT7GFynavJs4ig9HnkwVCBsfWQvmUIVBp/y1219Mmm4TTPX/dscik4AdnvIY1AUY5tMtxZkcI2zxJcecLxWg8Ky4fMTmCLnGf7051NtaJNoO0M2QFkQxSQIB85M/lw0bRzgaCBpR

!q c6UeebMl97aAKYydDHFuiUSUv0GAejhrGmBSGoMscmlYDUDgpBlLBHDDEWl0VH6ntOyz7Ms2bMvKFsWjWAmP5BVUGPf94AOWWew8c8VeZ/lCQ/2WObBxo+3Nfa7Eh64saJallVOxhzdPCOcOYMKCEM0RfnSqgk464YdeuoPoEpQuBxzQ2SnK5B4x8apxYKe5VN7QowMHISq++PKRoAtYzCZgAsfySIoTVrJX75iJf17nrGgJ/qYfnS7ksECdszge5TyG+LH4CWz0fQoPq3gYyx+GRQoh4IRSm3atWyqQlXp2jzXXQFRJz4g66EbJF0Fksr26u05gwymZmmrZoe36GkTTtjsdzvbnQPhTOT7aBiJQZUHQwfS7IWfpw3ErQ6i1WqHLN7w5QcI6Ac+e0VKutztYSjheI/bpHj8R5ZL87Admq9JdsB20gVxA9NMkeJZd88U6x8jQFAYIs4JtGFuhwDN4olErIqvFqNvqBd2vaZbXKZ6DbivT9ZtSvhyqBrGKWPGsLhqZCVAG+RnQOmAOi9R2ob8=

!recovery 1 600000 h5DhGABeR6jZPwpLkyutuQ== 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
`
