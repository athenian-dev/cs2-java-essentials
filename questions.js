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
!lock 1 100000 JIxkDQkxzAkhyqLwo8lotA==

!q L1IiGcelTvhNpwTwy0xQR5WUIan3SSilYCBtzmyCDdvxJMyp6K81ADlfwxFOLgvcf9GkyWZJMr0ILEVkvSyqgjE2C+Y7ZOWH+fEGz/wyiU7lApPCGJv5GxUmen8iAaDYtjsmfYerPXQARTDzLOCzfXvShZ/A3QVmv1ybg4KDx39FRgKaM1PHoiR4djllXPXnxFvtcqTHLe8dhyCyFnf/kwwn1XHNcNaprrPu4lKsrT3Pyz01PkU7hgp8fvVZb9pn3ibDRHuucWosgDcNBLA2Ruw1M0syufr4XemWX7q0p8OAZbnIq4n4Y0xlLa+omCVd+TdHxLjA2FRzqBnSH779TDxMcpIRhWIqPQgDvj+OgzhS0sNxLVDG54i2xrV9F3lDGBOXW6KQf4/FnQKJrkxRLysT06yNnUD4Gya+SSlXpHDgyQLejeprDAHPzSIWU5/9900xvnQcsKX/1b9GXkOTS04rYEOEdSGA+lwN2Pb+8kAMmtR2emCj4m40qlcKAbIJakJig231Jf+g1Y2eYGSnQKA1xoTB1t8MnkvJX8nWnK8ng9Yti/zOUUSKd+rNkdVvNxYZLcGN+6eMlzzaDv7LPWM+KNejKU7Xo8robTz5WFeyW/C7WglFACwaS6AoYPa5dIn1m+GKFZMj5/Wsb71CUfy0

!q yEb9pSEPiUpnMgKEcUO1h+lo/N64m7hRjgXVHha8JbqlHKqiBpgT9i6DFo+gXqwwh6xFkZVQiP5vVrJhW83E3dmuDrb/tSI04ULT5FtuMUIWfCB49OO2tmYBGF8JeFiWZ+4Z7avUtdkh2A20dBKS76CwINGdneGBPwwDDXgtYjY5banxEB7w2cVji0KuU1NFgd1e1hY5vMivkoAtgC2lWyaHt9TxDLAACVWXzwgnwT4YI5YzYivIc4OdGjXb4mER53IO9pe0R4PLd6mcUKjiS12nVzsunJLUctW+7xDX3SKX7x2e2SBx3jHhzB+MOlYwwZEEAC3peqXOxAw5amvZjy3WGSj3+Kg0ShawuURSFUwCbhXyy0364DpBTvM8y5zciDIEMYDCPKVKxwdCvdDxXYNJ/oXw87ItWqKR0lwkIAnnJ7cEpd3tPMXxQ/rqYFytIPCKkIrBAAwp+JLfsp1jXXgKmmjMnkvOHCLGk9FX4B0ouTXwVoIXjoO1i2NPJO4mHg2zc3jnR1GnOj+GdnnIHBusppoCqRZO4O4NhNGF6wO51Hd5mgdcbaMoWbNpDCltextYF7nQUtENnQNylP9bCFBg1qAUbVT2d1IW/825YtDnCJ+XYu5biC7jm8j+DCs=

!q WJ8sCu5TefGu1OazgRDl5MeKC/bGi//JWTv8kto1SvWkN6eMobtZ6JQ0fXztDovVgAt8kW0YPD9mTW+n1qsCPs0A6+FXpaHYwN0sCnfencsyHDzFPWaeh/ZQ6Mlc3SChUN7yLywi5XPjFvriMnERSL45tBJmXQNdMmg4zVlqxsw9A5wD9/DjhozzdeVAoCKnITou7MwT80Z3Lv8HxLfjh784Ws2nxD/uODhy4D8Vf/F2AWoLTW36dcqKrQd7nZSvj3sbHsslx6U4ANDH2u5k/sTbJCbbUabSCrks61eeC0tU3SYaXN71TW7eRU92+q3Z9knmScSyjUKzh635iuXGbb+FRigRYwkNeo3FHK90xzkqzV36aMhv5ekS2BwK4wDANP08i/k6Me+NYqDIx2Zj58kuN6S+1cXZzE3L1aMRjmzZpFoBJHn7Q2LtOte2GDr9LLvE79sRma9GM4DjzYoTBXMjMj2p/A==

!q X49PUW01oM5y/NJYloVGMjvpFxfsTmp5YwUBzNJdhvs6a8PWf8orUJQhg7jnDzON4rVkgchk5FCD5wioPhcdmrgAbunQYhwiiZ/X+Xkx2PnhfvlZEak8NwyTpCfNNDE1VqeO9R2ypObATiNf5oqPqqYdpbA4bO702Pf7wMSegBxGTSLmTBNb6+nagru289pM1RxwbYhEKKkVzwDHz7/NxftKL+j8Mor4G2GtWmVUC40t+mijDTMX1e6QU1GmU93mw4qvspKLRm+UH53s/oZunCH8MBPIgsTR7TnPf2uKWld39mr4VMEk3lIvtJTPV9UlcC14dox+apyORu6OOag2UQjiUG2bSR/uJ3qT/V3KhU+gblKBEQjJBt6VCFQ0dHQA3/wPpE9x08e0h3+M1O1ZRz5+WtctlzgerNQR1tJTyMCILi4I51ac76/kNrNtxXQ7o6Y0cQQSjT+0eiLahuaJQKB4slhd5OjjJQtL6zzuvkRyrthQstARnGLKvLkn3yMcxWR+n/JIlCjuvsU14/ClrrUxWjJdAD5U803UFuxWoxwTNXsTbDfRKd45KN2BoCxgavFDRo1qZhDdA1XqnSZYpd7PtFRj3QCUkvJ/rZA+gU7g/j4vv/MX1SHDvDq4rCrZg27SW3xxfKImti+E1bbYk1gUX99UqGwNsSeZ8EJO1wY/bMddlS/UeFz8Gc2BNaQjLnXnfrrI+0l9YBD0GJ5aOuI9eRHul63tv+gC8ec4Qq5zZQfLOLrTDkY7MApYcOV71uwT1ZWmkc5kHl8L

!q Z2VeZw9BQDQ8XChAkqkJ5HFcFfJCrIloda3KiFB+9V/7TW+6RZHevdafcaR8q+bAOGiGwjvYbOK9auy+UCHiYrMa6Or8HzX353Tnw3HK45Hent++xuonuIRSGteYz7VXXt/deUSggOKS4EEnpvOvbMak0vwRCAhGBHriUSHUjROFL3GtGLIdwD86xz2mAFasqfjEhqlPZx8CrjgxDYgn35BE3ctIpy1EPv+5BMbeyXAGAelNv6GS4i/el4D8K/WbwkLsPPZmjuClX5x4TnxHIcuf7CrAS+5Wt07QELPagAbrDW2dTCpTxrvWT3IxGO+9VwjQQc9vEbvoEU7ikEaiQo3pQVcNcvs9/dCu2Ct1+RRFSxiYtGAlEYtq+IvWnq1fpbCEVxJwX77164tVMFtpktjUBnMLsZCyzY8vKtBaKLT1

!q RTqAAZrmsaHUOuK3QMKwokknhrjHnPaaOgEBCvNOpOkXs4RLXfnwthc+MkgamqHDJMMEIZYCO++mWENZppQ8N1UrJH9E7nJFChFnDrSYXrDzh+2Qg9qIo+8lHAFKKhcdH6Wq7PmzAipt7uUkTzRN70cWHcVTv+N/C2JRDtqVs4hx240tGMJhKWR43Htji+9yaZg5zTXMIZrKVvji+d3YBsHHdXGQUCVJ2nr1kGFN2EMUv1urSTroM0uaiI0RP18f3nuDRkmirLUL4VuhPqxAK8CeBfQWbFTqyxKjxDJ74zJdaorIswyejuSd5S2JbvrdnJJmg09JrTkCQezNdjih2W+tIRpRq67blGfA+5WCVgbJgbNfLlM0ubcBs4+fVknHZS9P1eVP/CwFiBwrsLmyDXIe6B5Gfveu7DGE/9Uz6rWdthJpLAxRXu9fMWJ2dc//t3JZ18B3E6CgxW0yhEaDDKgeFHFpYhivZwDLYFpjbs9YnliztBDlvUCK9v3+Bi3xaB3SFpRpA4cZd7WKNGoc8DD4Qtg/lA==

!q pyS76sRbXsyQ3ZhvhbfeCgjvbPZNBIOVfu9EI2SPTukkQJxSfLThp1Wtu4EtvASDMS0Fp5WlF67lJ0Ir7s1AWYimrqo9JYRDUY1WzgYIZLf8ioaa0zbFcBNf3gZdjYONnDt29vxKfLEX9aWzJApybeCHJU7OjzIG1HdwoOtAjx+tJ+zc0O8jPdB3ACb/Fm9NQ/Wuub2qzCZ6wKk1pw/Q/5agfTkK2vGua3DaAo8lujKMb4h3YhHeK7J5ub9iNJ2s4AuDD9AL+4DV76kdOGgstAtuKIZg9E6MHYsXOYoBLZWjgW3yuhlVgoRRBecOlQwpkOeLIRzJlIxwK+Z7KrfZQ6vzcMcueXfE++w3TibMz9FJa4NfNW7X702a8BxuqBQEf9ndIaMPKWFXSGt89PQDR/cUW3IhDydExQ==

!q ZDQnZj/3bsE+QCqfEARChJ8oC7z/VZgy++JJOYjCd3l/avYDTIwjDPKiYi0yZcMZbPYC3x/pm7od8CpJ+XfTuLmkNGmVafwkVKnG/YKXz5Rwr+VkjPjY6xxaOgeOTFJGiGTcp3ShLEFu9TlgIH84H3zw4ml63Mxv88JDyhyelC8EDUZ1X69PnBGmC3BBb6iqZpISPV/k7o43ubsd/anO/IHqstqyujsBAmdw1NsQH11C4aSxGAfQN2JA8/5EufZfPhM5sbVKBejo++3a5Vsw/y7lT7gxjP1ZMpleF/yTAsVy/oxCRWpfuB24jZ02RNJgpfeNaTzmdCeiwW//KvwPj/lwTrhyeE8R9OXSlQVUi56FGqoOxWYMzfDnhtoqvl8nuiYpFqlhfBSu1ZjJWLB2qrkelkMvYYV0jISDGgUfUjdct2tuI+hA3Vtq484ynhbV+8ElDUJEIfhH5GbOstlqNXLRfVlcwHGEw/in+6QOCAY6TUXfYlYkp9QnmN5bJ1ETUrFQ8uC5456Z18vgyPkTCHp7WZDi3pkL5rp0E9hQv8VFe4eplLtkBS1WLJjUjCIV3D0KxfFqJt34AViU44OYXSE=

!q xmM36gH/7aIcFXAW9YRvBAnCk/APhfg5Kmm8o0W3FsThnE8rGq6fa4K0DA0Ti+cEYpzzMRpreWcrXxbugqNwFnRP03Q48BNl8Ttns0r8PuOZJXXOcSw4g21iKiVde5kWwczJNP9JbXii7+poR15JL32g2WxlCut2icFsj7aTGGbALjoTJXBFbtJsvdPLirB9TF60Aa6uHsTzVQycMXzYYipOncZH3bOfc2Tbklxy8X+eaE6kiDNWBst/5BxxQjaKnb+O6xWmZ/ZZXJnYG7EkNaBKnTwhsMLm55cwT0PjZ0HrzI+fh0TjlOsLip8tmy5/K7MM+AjqJcLHhIGZyBNkvhhwMlarn+yrv9UaGFe7S0K3Diy5+kUWlOetqk0rfCCFGxcHWQ+m+bt0M5+W1ts=

!q LSVYtHJ/bei4WCnpwgt7yDHTEZtOn8tzR8RqXo/MAxNOt3Cbt35x30ObzTVK8EdxG/Rd/7LN7HTHGyPPweR72MdL8NpXEwuK3Qi4lQwsafRmWSavMdKO5jf7nRINxt9SBjGK5B5yhiorcOHQUJqvmGNJc7C73CThejyJXVRM6oPVGOneDCddETo9BfBbLH8gupBwOFxQEFvWU5oEm4hhoRF4NysWavATHfpgpY4sL/XjKlBpNlYDuOKSLL64dlj2XCQXZMe2S1jJi736Vnp425lexl4ViN/oGwUiGEWn1YoNQdF/fpQU9u3lpoAzyo2O+qm7Nh+qKJMSDQIyEd8OSoHKQFRWkp55/2r7MqDf7zga3WUBBLoqX0JzrPF1UTXDJ2ialKu9jBJ9VELoJycJf98OQlF3G/W+8NbW9It/LDkU0MH248A5mk/VvOadHFOl9JGheJe7oHvsoA==

!recovery 1 600000 w7QBKdlngnAVrF8THOatZA== 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
`
