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
!lock 1 100000 felp5wqQcd01WlXye3BqXw==

!q iHeSsI++Q263y8Cle6hs528qDuhxhQMq5/y0+4Z8MgQzZW6F0WFMEjKM5D/+9b8tJ2fIhRUHr/bgJQKfvozT59GY/e7GV3CUEZ4HAhIz70vwa/CuXUwk++JFRKdoAvCIhVUAAdyrg561DwA6hD2wSYuczxtx7T+u+jzVWxDxlnJIWXKpJqgLBeLWWAQ7jRVxjAawZoLHDlFjCtNZ5SBR3WbK0sxoVb5CPc/T90M6fGO+Dckr8dcDgAKi40v+2tbR8LluPYLHK7PINEHCdHqguGzy1ggq4sNwHBla4/0WrYqE+b36CEyuvvjoRf6GzM9LhCOrhepcteblsgqOtsqS+FbY/zqbaaMbHkMsz2A3022nNwBJdmuRM+xMcS+E60k2n9t1L8yzP64/1U1xDaiNmV+6lzgRJX3HNLjo7FiPdGgP/X9zHSh3g3yy6xAlIWzQfff8+9mXOKH41w3ES4XZanqCK6x78YF9icGJD5OJFhbHLLJs7MqYuvaK4DQ5PMSb0gOkCxG+lWfm+iY+XRS6K3t+mgx5A2yM/VSUa3HRQceX+RIHh/VIoyVvMf//ZAfvOkbA5vQU9a4VjDlrpdosz+v/CynoCUKetg2bSl1kDXrS0Mg4yTT5NKghpM95+gIbz/2MjIT9zxla0njW60IvotZKmX4AJdsKs33WMi7pQOx3THpWQiDQ9pZscDuS9AC1AtL7DdU+vo0EA13w9sups/UER0iv7BbrwWS2evmLMfntu1qNM9A1BVWt01PU

!q Nn4UE6sPu+2pV/akuBQYqnPZD3wD7T3+kgbFRSfiCzEp8xpOiSThw+1GaUiCJTlKLSk9vVbr6vWW7ixd3uojJ7Ync1OnzMORSy0cdCnajbIYi+RBcIdFlEzEAl9NzDaXhahnPnzIZSBlqRhgChXIvh7XCu+r8ndI3Qd66q1RpLEXJBNf4YxXmiOtoF0HcdcgKAPStY3ZbLpSiU7vrduWUADnFvkhUrHlxV1/sm2nVbXbdEG+XALOo/PbLvFXKGkyj70cNby6bofJGXv6ASqNK6dTzoQlF5GCC5uqfIVlXplL3J9cijXomxu0DLb3tebug90GJiRzHF2O7V3uTlWIvRm90j9GDzjmYQ1sFZHrLZAm/UX0hpx7R1d5XBJRkooHJfC+8VpnbxNb6WHV4B8YVJWpioouy7dvJQWmJ6hIWeNzyKnGHegiOfKovyXUP0Q1wyB7X/YwZZvT1HZ6APu6tSv09XWa0d8vi0e95VwYITHuAtEA+IPHPYeLBoDFkKiR7bgnX1O4LsVyAGgsjq3VFkbTDXU5nPxqpHJy62Y2/8jHSkWAkajzHHRod19Wez+nWRZj/5AZm56NLsi4T8Upgig/flPQcbRg6NZ5T0GhwUVApPGO/xp0JWeOrEONMJaYZBvM62W3XG5Ls/HfBM48s7ATsCgHFeVp7kT3zOqRM345xXxKxvAmRaBJZfyoZQXlm3VSHZFYEx0caw==

!q QssoS1SO8m5Jw2Ar242PFjnBPSngCmGdA/5XxRINxnM6n90hj74S5U7gfBRNxX84SnCmomdEFhqkkPC29YsiALGCZGK9cmdWjyzkobnGscohn5JA6CQrIuXtltbymXh1AlQR+9xVzjUG0nh18Y3cabjy+D6xS4PtoCOsupdhWGGorIipn/Upd/nbh4LUmNOnv63SuM07qXSULT28ZAZW02vChD2+oYid1VxzUXAwLx4UljELyNvGud4z0hez7YboMwc23Y1Wjj8uxd07/KBfCjaYO/O2vnPvrVcGdoNer//t7hQ0ijnI6F0kp48pF+ZWOeUgZAcwiJINJ73dnjruwJmrk7/4PngWxbIVm0ReHSKmFYk/27XY8lnOm2kDQDe7/QEwsp5hMkmFt2tIXf0BOgNZq8JBy5WMsWEm01J02+Lkn9f6/saZA/b0KbHo49jdwsrQErCDLhaOhf8lZnxb9TqMiLNHj+mYW6NxBj4c+CYSUWN3vIJ8Oqy7vjlibyXn5v4Jw28zHttRQDRpWDURLIRH/V/UvNc/ALJDxeOzYr/3jOLwruOo3U7taP7IiryRWR5DSaLYH/y6SlZkW/qpAlnMQNEOzd6Grw==

!q +b+gc5cBK16cexuhe+jOBEGAFgD5zqkOOMFwFEebcWuGhH7FvJNwb+Rg9G4i7H7fxRYX5fubc7tXg/3Wbemy7/6rGmvtsxXaD0C37HbWHvMeY22OR0Z9g9ooZpzXEJJ1Yn6XKc1Wr5HGp4C8mV2HPHREPMPCeec04BZBOMOBI/DGPbJJc1QZQdIrqTuEb4WnECom/XTn1M7CaasKAth6Gw0aFTBIaPDyxKRIMW1/SQ1Js/Y085mp7unHQ9MzQelI/bIJ3hRIpKYerGb7hea+mBKd5Ujzt9ews+yAqgIboevy3EhvVMUxswftqnjlQWb72SiZidmJwwQL5zcOSiDJWBoCBakbtxVIJsaUMzC/eKLQsvAaaOsA5INFnTrxPBqN1AGETx73IRlAP7IsiL838Pflv0oeR8xX7T6Cok0NXCX4Q7xD/+X78t9Cf4uiXBxUoov0EcWKMBeddLI3hbmDmD5rZbgnjDSEzMoJ/k2U2uzPK/cr3UAIlxh4ImpiMviEaLaLwuy1wWSFt8DGRYHueMmwxhDBW0ZqUod1bv70K6eP2/BoyXWPQ/r28sbqyGOv2RWlXL35LgOL6rX/Q5YHfAfa9oTlYhyagr6mvU/EhkGchnDbXL2lrRkCL/fp0VqrINkyN3BQV95XWOyz3sh9yrgXmaS1apAG/asjlNyV/iaa5xWVObOklX0GHJr5GGzoS9uTa1L/zNxrDWvukvoleOD/O34OoSVknBwJ7/ehcsx5S7dve8Kt2cwTlFk6VFawIEzvUdxxGwB2pAOphhCo2+i9kT21ZJmYmHLBDbjfkqJ9XgNQJYfgNOAAry7EkQbGJ9bboZGWlg==

!q iSp3EkHH5abiMpe5XP9rswuyojG/8qBJsnogXLHHiN//IxKKNnGnUm1l7Zuk9EScroUPooN8uL4nPDRpk8dQxCe9vMvhI0RkpabmFs4kzwsbjmGgXcRiOhOzvQJ7Lma1Gtft1f/P/H6TQRcQ2Y+HuQzUx/HR8P5eVxDfARjOdKp/vagUsm7WFQcp8O0zA7PqgCkSCK37eRv1BEUmRvKhMDPQ76FU4iqkhkwx2vteFGMuIXFkBnryLjvrgPgsIK9UGEXpPhyfFoGrXZD5yUzTFDaKqwUq8ZieRv99DpQmA59ZkGSXPf0FvhNOuEasaPb6d61YXJW5ZdyQBp6G1u5WmpbHpFWWEQ5aVFpBwAQb26LrRf27kM3/SAd5CVft6Pf0GkhVA/65KuQQ4dao9QJlZkEbGkE4MbOhcExs8HqJEq8Tb49N+2p6bjDGbZBWj4FR+z4Jq7EdLWvMcfRyFZpMYtJ2avx7dlslJift86HdS6aBkF8JXK9U4vC8IFcjq49ehw7f2epSyqBh+SGJEaRcYPFhC7YOMTY59paiFiEAMQWl1rKmC061EA==

!q /Zxi8aYmAR5bV/p69uA2LCQj8fyj3afq/XNSE5yra4DeCfpF5rIYmUaX3V1lEy6PxqUgwdthohWjftA5QYK3gSZJwBC3xFvZnTvs1169kb7w3E920nrE//vt+LrMGgxHdmpR5vVVSGpU7QRAl4gSWMgr6BtJfSljeZsQ5/x1/RckjhhJCmLlyvmGoiUyZdIIOym7Uno43u3rNSTZD81jvm0hcsw/8/XbP0k/ixmlhHbagAgyzVKgWVu/s3rBYCalNUaeMu2tvPupCQe4pZmXEdwLS8MSzBYRHmTDCKz1jd8QLSFwoQD4x7l7PRfmtJ4fThbAnl7SqUNf8Or1mocL/5FZBQIKo+kVgmhOo29uLksbXZvj/Vp4CZYvWrMNjw1OGO3eHmPC1txpn2N8KpiorG8ExQxGNW/ECyf4ur9zQ1stkVxx9H7I2WHj5DCcMftscoeTTcYmt67lPI4EOffZxbGMsRYbivjq3pUT960QVXzD9yKynpc89KpGulIo4tZdiMxopHxVbmX+hhc/Ktp6uSJsNbC30uirmWPMD92SSLvc95f9vtXcibxe0P0knoL7vTWHP81Xp8+BaGmgbo7vgUWvnwAaHgNkCvwTydVGxFnefSxQjHXGDGpwcAefidK+DuhAUTk=

!q DqmVtlXRjvrGufdEDnUdqDmyuBFB3VzJW99/FBAnLKeRxXvbh8H9mFFrC5pGrofWPeTUtH1Il1YejywBrGwi9EOa5DpQcucPFT4ykz4uLUkFG9rvLvXF4AZ+gpfCBjdujLzXyaq8Hrc1g7hhE0VuSNNzvbXSHQaDhPDyBq/ylCS5v8/oSYhT46VWwis5i4ijKSPLGfg647Sjnz8dXkw/57ZvzsToAFqfU52aeRjBycWvX3j7ZfW64QBDrNbs8yM4jSd/JKxzlLi7fprceLN0sTnTq8VAlcqP4PUxAyE6ZXTWnNvPEgR04cW6869D9ohA0gvXI/0r0qzMHqtMfaosQFu41yB/yPrlPwOmtm71uFniRVv9DykD1ZeY37Zk+qyROw892A4gfTSmTKuHcImUh1Wt4oGKO7HBGgWOHAZ97QiX3CrCKE/NNyige6zDCr7UHAimlHFqJfJNjVTMgN3Hz7xq8dJWFogTVR8Mjp9mb4M=

!q /CJDK4orCXnCnPupE6Eo+HmFNtEGEItMKuBHATFaErRjorkxs8aq6qgUAmvUmBsD1membZjkbEPf9dxGg2MB1zxiFpQW/gDrMlVuXKpMvMSldrROjpDXqiSx40Cfzg3qkUXKaF1MZArytmE0J/+Wp+jrMHKn0sMTP5z7e+1VsluDiXt3Elk4RLLUlskntUcJcTgYN28++ctisekXyn2OEVRfIpXlS2i9Hoy3YtNKaW4oDikkoo7bbGvBmmcqlyKsKAyACjiXQ5iYipfRi9BtpG9L1+OAn3ZGZF5uUEf8L8kMoU6ZP5cfRbPv5atp8IqpRUnbqKrXvdGy4KSaxDuUWCm9LfzO+xFMCMdAOlCkNsx0/pp3JHlPzW1/oNO7GVvfdd5mghK674cANO2H09wbonjaLTrtG2LTP8f2XdJ8oinnT+6Xq0K7IBNLeg3knniYSpUJEW+4ic5Cfq4lOCZck5QX+OOlJrMpBF6macpha0gOjA+0kn1UYC2rXtBgdrZGBk4LTgVNe/uKIgdBHQcTSH9gMePRJIfyku0Zg0MwSe2nppHu0m/m6+y01SWo1Yp+521wsapZPI1QhuFi8S7+7uoAx3dxCjLwd/hZguoXlxhXCxwX5AX1sPUTC028rWBJJHLtUDnumT/k6s1FrhKz2QxbiBYQmejoHYt+PQ==

!q 4ujS2jNGrN8FeUtPiiCxo835urnUAJWA2/qtvozEW2plflEjUcb0JiVT4GCbvbFpt8E0a3PB1bpVxYZZHv/4HJC4AGsZob3RtmD3Miy31kKCPmmlh2AUxtFy3ysCRbbo160fPFDRuFNt29gikERip7lBgrH6DtautU+WGd+GLAowNtCTkjY+o9TY9J4MkWTOMsx24h/yC036NHDqKRedlBRP7uyvs6XJ/Tjz/USs2BpisSER4IrkOLrzMQtZZZR95McLeiEXrkzl8LO+wIQWgoJJ7seniwEewO8lPHe85mTaaRyXz5rrNTjA68/BPaThXi5nHZmDhCUlyWaDRIAoyehXUqi0ytgZQDBJ/loyOFzOv6LSEs9KH2UGrl7rL8hVmo2uyMVrltqneECecWduuYDsVqIhmISA4MIYNZWYs1WYZc1RE4iwnEuRZTgIq/13zzDSFuf47vl2u8xV/NnQeQgd6atdH03/FCUzKXNJxiX6jxJR1LVKLREJkh2MyNcdnFDTSn0jhPga

!q wYDM1p8qs3vT47bUb5yB+fsyJ0J2ZLjeieG9v5f7NkOpFZblEpXdjYR7U/1BmX+tL+E/Grqqicw8eY+jfWiMnvrIGq6U1d65cGWbRJ8Z++wXqhXo28CsaxD2QAOSqgms2ssbvp9R9kDjJKnfI7bJ77G0fjr6JnN4+6MITuU4S3z9xpBoJoRbL0maYoCKxpv+lUyMoKVj5CRFIGPHIlLYl9jJrO/CK155VUAjLx+l2FHkz77D6GuHg+vIh751iPgIYSCxOdMH/nG4dpG8cnO7g+fJLwaw36zTlH3n4EILabLJ4hhFGnmyLOF8SnctJyi5c44XDNRuJ7ydvrId9pRooTTsuQteSA5HcOYu+9xDQWN+k9ODsALCEbWLEXTEa3cKHnp/olsEsXc33HynW+CyY0re8biByJ/JngZcw8NLQ+iOdqxt2qxCo4CQxCv+yUrA3Js+XVF6ahRvPt8fj7IWxy3IHy+uHf5kMcQqjVpplo6Ix/hcGdKduH/5nJwsFOz/OTbcWP/ag4yQPEwnXYuxSAFGpAX/DsKtcJSp0EE=

!recovery 1 600000 S/3skEZ5mUe0aXWcpMt4CQ== SbspTKkUAHHFCnSbE4yDQneaHt8nox08i46zVZ1KT1vv6h8fezoeyj1NL9n/Y93eJWYCV7rLPzLnIY7d+4uGVuUNHBSYjabvZp3P/54F1jDrngV7iVpGjO4mI156bbldH5wwqdkdbrPRihgtNMH814dGgTomVDd9NEy0vQWnJMdLsFyq5SjPcLbNmLYRCxVHTE0DvqCU27G57yfmxT0ddx63PSDk5uptjI9Mrg6u5U6SHJhgKgta7Qpk4xicCNARd9ao1gUOW6Ax5oCPvmL9dlldJrvkVYS9Lcm0uicQBok8MK1kBSpoKYYUHhkZ5yJmVKP67b7fsNIKrgz8KKr1Hjpq9uenpyY6E/qPUUbRgfyJOK6Nrowa4OTbxGFFq6xS6wb2L5cekkZ+UoLeN2Via0uJoo+7pJMjXEGEICWuakB+GM0OcXSNK/rAbPqKLkF78NaeHghMWYNMxO3F9TQ2+XW5zP1/JUGckYrzMM6ELgFUtszpm4UUUHCHSP0hOcQh1O0xpFdAkUbqjE6Cajx2l7khqGVus7wKtfDaszLuaSIIP+ChbZEh0L9PvRIeNKu+iAGFYXZT4JoGT/pZ4ICKgjkXvlORyalMTPhyR05kZO6rAfLxlSqQoupruMjG8afcOYsnWWxn+o5sS3XRcIzJvzf6lz2rb6hKhiS2ih6yp3PrebPCa28Bc+HaQ6SePYuu5loWGzms8+Qd4wGTn8C3A/KRd2T8jYo24vAODf2shqNTfkUpkOeeisyYE6RrWm9ih+T+VOHvlW6rU4johBTsxsvvJSoic5n4rbyiDR22vVYIUyMeXziEKZkfJmftGFWzhrth80I4QL9ULAca9eD1mVT2XpjSh0dIbNe8vdR6au4t2iIVbzj0k/O11ib0nRi2ubuhz4qae7b84+RYCbeunjsFgwY2Wo7qbQiS0ZgQkmfxQpgXz/WXCE9Ps+Ws1orPFEyLia6Xag2YEVumIYupmT51Z4QjITQA0KgdEe6Qt/i6List688byIiDDPs0vmB8KlS5ZxbYaMKHbw1XPIHu80XMKOJccF1EQ1sdrV6Pa9F7Tg3piPtlnH/4FECrojSxOMJGn5DMB/3qATKZ/WFzW+De3ltnmjQ+N19qjIHznRaRQFINM+K7mZv2kCt/CEt2aeWpQcAgiZQ/TlNcl7SvEitG1feLRm3DrdVGPOns2aRelzAnftvx+S86a7RGlHEIl3pBvSO916c+aLtEffBqMgg2vSn9W2Vs9n85W128w6IKICAVg91zaXK5mpcu9NadY5WswvjFiEMpzrnn2OzWMdsyQ/07gFevkrKxbDfXrVviVNsfUEZ2J5C8Pc+P0pi7rwGmRx2RmRYX9pN1131syG02CFAhuhsPY0Pr9sd2Wsmh+qtWCrnScgq0SlIN/iEexwV9nSeNlrWkhu1dfcB3h2SHzBPcLqAivV8iXBtj8emaz9riCLEZUqHTVII2bjv92D4zvzTcWY8GKcERu3JKfMKMRZ8Asp+EbAxwjy/JcsmewypgxgpaioG7yQPfU2AZqPWgws9YnWuYLBrOp4+8yDth8NGLiNslCdTSpj+NtfvXkn0VC08Tc5rwMlm6+7YSeEmJOu0gaSp7klBJ4HCR6tixAahbvpE1YEC16KjZHEuh/CCgU6VyFQ79djIVnvRUbGUsmQra6YCTgnVKGyGgKLifqFIQC8QzSCa36sV3tJEcEgQqkxVLjM0h7M9WEJeAQ/xdf6g5HF4pGBGYK7vb6PrAJpumm4Pws9iiybmC7WlJO0mC0LU88F4KWUXg8Jz4BWzPP+0Ynmegri4ehVB9YESlGJu87STMZkPLARiOULEBG2U02Td6ddLMYNHEUmAfVQh4chLrks88Mhf9waANujQZ+wYL832QUO2K2M4Lru0NN4iysY67C5Wr49+beqeo2FBKqMZ6wiFc15598I9pRTE0YrImyE1pN6si8cNztfnULMzZ3SgOzBCM79lEPjHQ5N3YxcRJAm6n7aNPZzD6uvrSbHOcahoy6nJoJzQMwAIWI6wieRI2bP4t1NPSpgesF2mkqqCroNkaSw7oOaK7gD5Vhlt8gvYR9KO9HzLV7N/icf1yB3JUCABPoBuz9kwYo3S6pz8GwsagaGnSMVD/Qy6sL7t24axNP8xonyTv2FKOXL5w8VvvFvMZOywsb4GFQPuKNITUwm420rlnZfeE/yIMaPgXeLzWjBRaS4x6AWNrkO4I28y3PvFhRcCZxP/2YzPvUCFJ7JrAYaXcgyBK5E/Xjhpg8VJLwUIAmVksi9Aw/04kXSYoaMj5bdOx89OSY3hltnB8xdveKsVk/uQmCsdzOsOxLvCBipItMGDckfPvZlFtEhLxBsPzrpP5ktfw4XqhbdOtsXtGBW2oRLm1xr8fSvqXoDPzvkEmSInnQtmae5L4pQIHqtgqh44PhY4FGvbe6rS8cRNYuwAPIfIeKzTIgMSGEqoazV69du+F4huovcDRKRRvidw59NWYcPICrGFb1uRBLbZBTVw87sESiTbUuGOPMmF9E9uvxTW2+xHdKmYdVreHL6TWRBxyfMabcrkjLVX1y63BxJoT/OA/Fun/g/FOvgKb9FuDpVbLxhShmD9R2xT8z5bQy7/6oM6FcuK4psquuDe2qP2VIp8anTbNitwLFyc0vxpHuXYNIULfDP/jIjgrceOYqabmT8xLEW6PJCP6lCzotCm+NxwN1adDGSx5y11VmvMeEaN4FM7n0Df7kYPrZjrhYUz3C23JnkWMntJhd4O31uVFovqSQnOXENjruy6B11XHPnh1fvy/BcK+h+3V0UtiOh27IIcDudSn7SL9d3ZGhPXY1mg+b7BT9Pxv0EOPdw/GRzA8D6hh0v1AaYDRfq/BiC2quocdwiy2DK+6ek/WscQQQB8UkAWLi9UbT//AIg1Axi9hs1oOOzAbpZL3MOhy7grqjnzW8diXhfMgMeJUcBTbm2rTIJZb4IOYnoPedJApu+KwJgoXqKu2bOefMpcNogu30Lh9Mpa72O5Fb1dFEwMFCpXEtbMrb2qS5tLDQpcX1IHd+vore5EcGM5buyjr7U4VDqtVzW6qv7rbVdN1B+1Nl53IZ59S5NUMI6Wds82ZMJQ+WqcpO+UHpktm7pfDlDAmVkp9JUauOK5N2cBsc+2GhYrrqdlMNhtFA6ZKP+yjCFi3NKyxvSqj+H0URFEn1Y3tIswx5wzW7BFy+rjeZwhr9B2WMHWAU5QfXzKRJwyCE3xfyW/DMz5RkMfn/MrE4Eb1Jq7/0tJrX0aknqJyRRSc/ItDI7gW08T8vTgIpjz9eL5DHhFCwlh72MNwfgGIzITMzyHaO8tLw2v/bea3MOuqhxddfAJnK7b1rXkHG5PYgQ0PWYQKMIiiUHIuCCbmq35wtvRJ8DIamd1afOnKodVvsA+jhxIAI8plnADyYmPebqmPHSyZ+KD4RXC/C8fqqCg9UfhqI4Lu0WvfXEz6CrcMbvkWdOgsWGL1hj+dRAaPPXdwY8eArL5TmnZw6E5JMVySuFcxm9lwFb6hD3uf2O3l37h1UfM0z+i8+RBfJJy4YvZaNgompL+ShRvMnLIrxXXDNZyy8H7cOqOz5l0CYlQrDBadSyV6G9LWRtzg/nINkJHwMz07Gdql7bpfd9q/VW3Jokc/ILaxU9Ed7RN+zZhs57cUtWkzir3cnbBHSpT7hDmvELX2nGVKFrJ0plCCr9z5u1DNcTS6R1cixbhGYY+U3XlrIPX+cnpGr7Yuo4DxXy+AepaCVmF514ynp+aZrOk6KhgRKNCMlmOm8aQ+yTw9PhI+cxIDHvuRORdrf4Pm5xikyhTF3pkNoIfIFCvcNJq8zfYH2MzW3+xp4330tEUdy8XUKNQ4XkRkLBfqJK/0FSyX8tl81lOhEs+IQfD8VUmYAJYBNqbCXJ22KRaevjeU95Vc0FlW3EIy/9GbaJ3TTIG9tugL3Vb/U5klYvNe7fBZ89/tqZ49CQjS2OqNb2wa9tjvZFp8ztqof01Ce0kfTQQMIUZtPg66KxpTjIfkQHBkLzXS221/x6AkkYmZzoyvBGvvCqWmQ+Z2MfEzCHgekl7GGBWhbz9kJs+sAGVzQ/H0tMJtOUXbeBt6H6BsqZy6PfypB7hOWPZXpNwoi7yB39LGERSVihfdQgTOnn9kHEmy+78d0cVPV0qRy78VFO9YbBBDo3WETp/x5p7TjewT0v3mTNLtm/jeLbROEYU5s5nSi5oLgPLu8QYSF0LbsEsveRovKd23aTJPSU+JWXRUFlPU0weEgIjRwj0Dbn0IAYvecfiSrgmB4YFJAdj0+qU3+Ljwuqd1dqPdkVga7P2FszsmbWwX7bxIBYgVWe66/WKM45h7NzXMRNISfpNhqc5O8Nm1zMpNGLo0rZrDnhU4fhnIjgHvmzhrQ4dt0/f5fqgereYeVzE3h8nk1910o1o4WWmJ5t+bCz8lGgZn/7U4f+5e3x9RM5iPx//G8Ij0RoDmP9R5w4dZRVxKmNclOh1oTVbgQAyQFWd8GyaHko2i0BdadsFrAFbMHxJF5KAGFfQbEm14gOOL6G6VAyBZ2KnaeHiQBK/wGoZ9mYtQ5FYm0p2vt3EyYqdcaRWMmxqs40PL4IMmR4pC4pZv8VUqAmZled7/030UJ5pNoi7zXvRzx/JxkKxoKdey2N8uKB1C7UiUuS4CvrN0ZmOt9bTbgq0YWQ/0F2qYMqFafKvlWTJ2Ko5Ro7Y/La4bLaSKw4b70iz7TzuB0czNVtP4vC4lHbovRbfZVvhos4ZvRKe+qXoTDLuKXlwldt0WKj+BudXvEOaQ61pqtPeHikvrIEq6xIxXZZpRLaef4Lpn+MQu1PPzs6Fz6CmTF3xTRb/KsCp/mz9ZzxuEDQMaOFyz2es9I1tDEjJpfDcFty+e1D1Qpgjyx3P2zICNzgVk3+iHLKmdj0btRFpmaG/dCouCYbcEUbGMGsp07VWvHWwdiV9KNO0+V0vmBMFfxi+dR8Cj2rzMITANwWUL6ZfaV3AiU7w3ikFdV8WnmAQp0L0r3+ujPA1WeJvg2wLdVRqSZkINyURqxDeKNFVd0aJS/olpBNn/esihFS5i0mMxr09mB4IE+LvJvohooAxGna8gTBjryDb45FFxlOXCPth5WNeuJmzLoB7H3KsI8+VkPWEIIxfhyzbPh1EJu0eqF3ppRWWpF1xmtmf5J/05LOFgUxNfM5Aaozl1E4DYD91HylpNmwu6nhqELTEtpfZNVRvkke7cc69w8dlIqKfny4ThCW2ZkNhWnWiCC5mjaqB6qMY+cWgycmzKfsPOVdNfs7G/QWjYVszKL3MW96U3bcGrHnpxuU5e6Il2AQU77G5rqm9GggTHdGAuELxHx0/6YHmkKWajEML7eTp1cOpgaUQntfIc6CEpoKGvShCNcPOemBuErfceV3mA/LgbrD6Ri7EeWZbzdYT2rEeD6U9Bl7dAsgH/FTX41r5R6ea2SSiYXCCvNLNzUj4nJTTF8k2JJy0I9ncmv2ScZqo6ZZZSkh0KTvsUizXrrw51kAKJudWZxdEixCBsay4NOvJAiAtrU88mn53XwsICNd8HDmEuDO74c5dwi26mLu+umhPKa6XanWptW19zTmlyeZ4TdXbcFyV2lPV2TH4IQ+qjm0vChIv/LWzmritvJkXX4JiOuCXSwn1tHkuS9n/cfR7vfw/L+BoZPquBMfNfwJvcOlN3h+xH+sQAgERDWrNdQEktrgBLsfUduz/iqqmTzO8PUWWS2qkA9ZeYo8mqa9b4bsVShI1WYNWuvwRkIuueeXm/fJ0NJ7rPUlcqRd5azqgT+NUsCqXFLmgVv5X2M9oveoi7CEbLkWMJtQVx5Ye1Ltq3Um2/pPMGHllhvg4w0M/Fxsr4WTMB7QQvMAiVHpKSDC2+rNQqmeufahMh2V+jvTKgw7BfESycBJjp3k8NJvjTRHYhpWqYNbABTxi52FYiVRvkXFRYnwT2QTC65Yi98vlT6kq8WhwDxcxJJ+cOWFv3ihKsHw3OM58L/J+WBmh10FFcuSNFBL4m9TiuE5dDLDblz52XcUK6mnMkvK4LcMMzrPU0Q0d94fpP7Xr4sJW/FxCwUocWvNpvGayatl0QEqwFeOgMzumxwoebdRLy2NdQg6GwE56/ic3O22MWuUfDKsdPTCZBL50nrIC7li/js5nH1/M8SnZW8lYAuza57pYXRUhjNw/4isLS3c/x9Aza2VCOIIygFWJZPvQmLBPriBNMQLRmvcA=
`
