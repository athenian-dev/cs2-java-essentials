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
!lock 1 100000 L1RfkOTpBx1DI4JWAhUTHg==

!q EyxSc1pWXhLR7CwJZ4JgmirZcLrg2O5qHyDZ+j6QK5bIN2p4VZP622LfKMYqG6arfooVjNlzU7sWFC0/jIMO+yW7IqfhHHQg88Y6PUvmlMx/AR2JP6uuBMPElqXz5/ZJqWT9flIuLl2lpDiyYs0qAEpum6XDyNyYM6bEc2g0sFXMjLKKTMIgkSdJCxWBvDQppG1EniWkyMlyyz/66PbEF1mVq6Sddh9RPDviWGEUWs1IwsafTIc3kOFeTQY9nqmSGcCBKUJzTy5aa1ViAYZwmue9vBTKeItCt1IYrbC/8MlQQJ8lXP5TGhFIyZ3FHBKOR/EGZ7mGc6Jl8ntuzdPtxWvlLi4lnVst1WjbNAG9Y8BEmWRTfccPp/gA5awSFAhmfI7yX00s95BL2kpMzcFIicCq23+w6LSRbEGlu2GdZ2rKuHrbJ2GzMcE6/7B9uRxOYLEfJXfm1zB6AlJ4hqxH4V1qIatZBVxamUhn9nicrIMff9YXSfVfHUwb3qWxOufYZ5gvG2PP400lw8b2b/EM7f/ktsiLXDRuIB1kPc5Y8jFc1tMUAc/dFf23+z8QL+KwO/Ek+tzPDV9UUB7RQg3jSDM8WegV8jW05DJ3LxRuYK6TgjM0od7PsQvoVUUPbElmaye4gmKe/tkDspUzOmTHY/iHAlnaMde48XgsBIlTCzKjGDiPXcLvwl7pp7WPNzLKlTZj10JOkoWtmHo0dPWvEofRsHsf4MOTrC2ZRwjzXdBS6dhUkfpfLfDFrrzA

!q B67Ex1oEYkxpD4Tv/U8+wgHHjAOx0W3YvLyIGUvSmxPuMCE/Hgp8SUE3v7aEbxFFMP2jcWzC/nAbYOtbjTsGIQCzMXI6hZju+ds6TAJcUUyzSAyehmEU8/gzYq53myrfD091K6GacYLwxZL24/8sukJr5Lfa9LdI4jSofcPaM5dUESmjSGntfhmGsUBc6ZMxHKw2XRbIXEK+/L11cQVflkimokx8cswkm+UBGVhiQ9fBJeRxXok568TLBhhtzSS+gmMVu1brtwMZpkDDR80mgFdBZU6XgHB2Le4q/AiROq8Ly2qc1J26gxBd6K7ZJhdvdx7SZkhl0TTYV6A13k11AGAYvqNXi4MVhAP3PFK+jqBr8hzKCkce2NW4gRyfEBJfJJOUcbg3Y0xMocmVFrLE5HAU8tCB3JZLwUHfoxTqrOpo1sTiD/TvAFnSe8h8fj5OLsY96Q/okYhmBWFSdu+NXg8yUsZbi+A7SPIge2WABzIOwUTvnajEEdlX7h4JKydvuj/YSzCrXrDX2JmZ92W7trO67a5ATRCMNuX3rSdh4L/reZw8RMF6oYVxcg8QC1SVJJcf7DBbIF5sojboodG25chbyoXQvlcwpH32TUPYYcf1lEMOTrYCyqTBph6c4DCGokeUXroK3dxjttqante+dx29WPkxW+KxsxsPzJggUKfIgZzwNyLzUdsIZUIDMhyoXO3gjbolgm+78Q==

!q pzyTLXDlSOKy89U/y25kbYCWGuaYT9WEFlFOgEKfulcRy2HZDIwZgPR55Az9TeucC9Za+6x7Sx7MqNpjMUz4UbbpICk+K+gckZ1aAqiJj2cIJt8UalcZ50EjqY+psguinK9dZgT2tu3QfNAYVsVfJ66oGkxHNEHfp/l6FoIVvWZz5VK70ofQPb9aAaY/SLXEx7Wt35uQCG1qRqrgvYIgm8JxvcGoa3RVDWTdKWBD8E2uGy3ySi3KYzuIpj0AQb6u+EpstVMDP3EHTppqJBqvogGZahLBol4lZnZCXSm3PGHw/N6Yeak4hmLujHAYqCD12gQSbq7/3miLiOSUceOXNdcMrqGVJGONDcTPp6MB5suNGfmOg8k5MY8mScniu5FCL01uEOwrPYuuNSj/wQCicBN7/SBEzNVJRAyy/6LsOvDkKMAOf+/U20KRQeSNSR20mrUWULPONzXwQ1+3bNX8RBDyai3QDxZujvHyvB8720HuM7yaArXM8TJfPqGQaOMN+PoA6psJJ8fBCsJ1JMVcwUV5NEWhyVra3QGLL8X6fBdLPWyfrXa1Y+BLd5vJk8H4wAPKowFMd4T2GjZlP4IAamSRQts2Z0zDJg==

!q IHoeAg94iJabOzaBb3mxhVZUStqbqNiPgrLVP2Ay7rLHXmA+NOqSAjMDVyB7ZGK1wbGFMhs8BPe5zaI2j+4JgSprOoX/hzrlEYn4RhqOOPrVbjdD45X3Yq+RSzKyhzm15zwB+IJsBEE/1s07ZZDupZfjBq4IywNni+FEOFagyaVW0CXBHl2u3z3t74xJZAvvZoLZ/1lNz5N0edcmCOcK+hCwJ35vpwgNHivrYn4kbb5gZdl+mAzVtRdN3ybtK1cOFABgJ+mMjgFNSmMxjoNo+mK13cokLk0+Jx2Y49qv6Jry38NAdsMy4UCUtKhV/DjVwyMdqxT38NbRYMeTxLSf9P6UZhzA+6ib3keRceBlebFzI2tgQgN5J74JGa6TaBHnbvcrq0hKoSsgZnfXaBaM3ZzQG3kyOhG90LcNI9HblEicUxZBlAkh+NizvfngB6NsTaFUbMucjHQ4cz0K4HHPvb2ljG26IXosTL+j0pG0PcjNliZ4dtaypiLbMc4UDjhIYKCGHQp7b3rajNDNJWmOQt24hIgontUSXLwML+oCMq1IcnWi4FYxcFnS1WktsUto3ZSXnM84b9lzIW2jQl6c+U9mWEvGc8dx74+UIaZl0Uf4DQCQq+QCQRMFj6MvtqKF0bqmj107+PaSFBI2g5+SCSYML7am4/SEHQ0QfpX0SRhiESQ4KRZQW+TW01j6FGjzz9tNtqoIhi+cZOeqpkqBZli61qUK4AEpUWsg8ARII7sl4FoFmKCZ8UuEn+wlZ0s28B+HgTtABtIj//9tB5PCBZBDF+L8lB+14DMYmjMGcyktkFCOFo66b9uiTM3uK/iJDrzmuNOMCQ==

!q JhkJQp9lP1ZmjYSyv6C9k+G8CpbqIRo5Ks4P90R4zMILt7CKI24rFrtefVJownYcNciMEkjZIX4ixxsDXcWNOB6gY1REakNEqNZwSq8JxVr5H3DKV5vrbtbqpH1yaD5sfRILKyz0VkPv7J+3GDD0Qp9eNJazPZrLoqpIeQoi0Ggo2AIH1lkjfdg5XYgBRbh3yid+ZORKUHox8vWh62/ASVU6OMovGH/51zLSYBpurnt7XUwvTSwHKPotVqfMBGOmQuJcx62fi647Axaiy520xIYqsfkIQN0EybMzbzsQqgFqmKnUTRS6+JA+BbXyYrsExRBD6Y+9EG0CXrHYfb5TSjlh5hiaIRtyFPBdMfAU8hkyLhp3v1mVHfVQ/v1841N5sP9ASw9pmA3tb9r7W4dIbtTEyLU9mhlO6bBuMxrbKLchdTO1QwAAMqBhhR1EcG7553N/oepfhJup7Yr/b9YGdksyi1/9XeWlggbJJF9+3wv0PWCS+9rrcHUAKOKE3Ev2mi/ABF9+SsWX7pQAiwYP0PQnr1tJnmohdUdx8yj5r6Vf1Zl9Y6n39g==

!q gRpu3lGfGD5qb6GRGEhIaD4ZnH3WoZQLoY6W6FJ6g2oXtFR2OOaw6iRvxxfwRn5aQaR0VVh/vLrxNOgzdpw/tsXVcsMiuUsGrA0r2zSDWjBtB2iqqXHz4xh8NRWrsLBcxwok4m7bFszs8y1iK2pru8c7uhORhss2dcHiY58d2zt+BJy7xMdJADcHupP4vtNC7aiQ4mmmJZd5828bzyuLM9sl3lWrdHBbgfqeBwE+3hQZRFpfmzGRV5ag4YRrUV5BTRQw4SDVuFfxyVSZvNnHjbjU9wUxvT6MGJbNrHZxuOynD5rTy7kfuaOXQuG4/YvNw3lBKKwWVE7wD22w94uKSsWFqIMp0w+FxTxpH8hanieBFHKql0uh2pikb7bSgxUcxi0ZohZxlgKHN8IsrKGdPz4uAOypdaqPKqDEmJRJcoA8ZhvnWmZFo7v2FfGEwNvI/iv6dePi8fDcF0ZUorUnZu2cjgSJ57i548JVmhkrQ6z24UZAxSungxFGkaxp7rW8k1jUzfJfj4p0WurEJ6/AT2RQ4zGaI0XgW4MFUPPXVXealGkXhSZ4Fqmc0nN6htwwCkNZcVrO1KL3mQMf46tV6hsjGRHP0IhJJEVEiIkK6J7UP5G5FlPa0zscSV0vSDtm9mJM3aI=

!q y343gZBxziBO7cyGdghgmL35LgX+phPw7WgLEE/S++ruHIMifZbeCp8eTxOXV/I4X+TZjFpTfIGJTs90Om82zB5Zil+NXu7LYl607MIUoHxKHvGHOHpzdBO30aXsAedybUhWKnLHlKAgsTg8V+lqaDrVE3riKOXbGwjdNc0hyDhux23hg5KkrpLWCLjDaBAwAVVruJet/5uGSrFHk7PV9XIqCMKEdHGWxYvcJhRxs1tN6pj5oKKE3NDJhI2ZVWxh8QwKwFoFMCl627PN7gxuQRNVRG0rNRbNPU7oDWHVSP7DmXunMzyMs5T6N51EYvYqI8g4CeG3DCHJOrKp9Jfq6ZDOLw5BsrPXnhUr9RFL1/R2aSYKl59EVZFPVODXnd0/STDVI1+F7+0010ALF9C3ycpAUziAFsELXZJH1PbkW05X8kThJOHKzHdX4OxU+WhFzjQ1Oc+CmyaB+f6iiPFT+6/8AYX9Ze5DRkDYxnkTARI=

!q vN4+FMFkhm85aBGksvxrS4xR8S+ylOg5/VUloB4+vduIVKO1kI53l+uDeScQzkU98yWr827vsqoVOA6vSKr196+4wFAz5e24TXPZBOQofx3tqgzTehQboGNETWS21MExB3YgatiLvVC8E7bJa6UoX4V8f6a1I2gd6AXc7J0DgKBwUHS5JHcGNvgFs/sGBR92X17MZY9czDkcb5AgNxmiLfg0CBUj8AmcFdrMfu/v4osSbtGU01Unke3KW2irXrQtZLwjE8naemFJtfMoPB2NzA+qho00stPhsDaHtdqr0LVuUKd/hC36sROGE63tG/opEpXi4tpcSwbbKdvWJedoj9q0v4+rTA3yjwJ4KY1a81IefEV6XcAW1E3P6BJjUbhlh3yhLbf+7evZqVp6cwMOqclzKcoN7RKBqmUccslU1U2QRAouhMeubyfXaGhoBFat0/b8FTnyqdjatpjPd67Sdj5VvvLops7YBc5TdUktzzbG1YyeTvqhn0s+BD0kywfWns9Vgv6L3jTgt4+5BhBfJcE1PoxiLYSnOAxj3nQwJG0VfKn9TRd5+gv7hLuNCncT689BFvHv+xgT6xzQWSrrfoB9lNSq7gEZczwXlVhUGG6cgAwtFxYKCmjfHUG/+KVXgB8AlQpAlOoUlKVulCAJeMRavKof8kHR6ULemQ==

!q HpSVr9ELlM75tFA7G84aTJn0bD8CjnCRwd990g6Y3DnFrNTbsOWOsX9BBYeD0iqmg20c6PX0IJFLrc4AJp5+os3P8idUCAmTOozbPW7gA6rhs13CC03y04aN6L4Qcrm9MlDPxIuS0T7rMkEG7aORHWxNGLbF64cTry63uMjNu83uy/tJNhP+2WhVU6vbhJHjX6ttWbLdEIDkRr7l2i6N8x3jytlJj1yQaNfBl1IDcVrNt5Zzjs29guyiQ972QGl+zh1Ts87GRkvs7sWsN38Pwn+eUDhzQiG2NcE2dQH2fx0PODzC9HqqyDcLtEfH71iR9qTUqfDOMwyUAIczV/O6v0fq58R93dnwBWInW7abFkmxuOJGLB5uTe7OCLqJWtuO7rGujE4cd4ZvPE58CIEPAQM89qP+WNCXcq3PgOGJeLCw/0KyJ2w/6bc0JCZ/lkb8LP6DxmTYxTtNdZD4UMS4RNO/8m/HHVC3HfzB0hbbxpbjMhxXo+CetSuvb/Iv0ZhTQ2xOH6KBBtSL

!q hqZ+U/+DIJ+BFL6OJxrqCjx+2WlpxmA9syowvKKbw/NFNm/7NNsx/+fFxmMfVhaADKwB6HYo1SkGPCtCwSEvXvdLreluKyVXz11lgNVzp3fAwxBPCZgPtTYaEKWDc23KO2F9z5qGid6z2mJMfBav7jrHxGOl0w8SU8d0xTdTxcH7efUOqL/DJr+5/09jEzXN2D6MhUguukfdJUM40xduqTxqNqAlm/OamJLYFUGBRms3WWpOERG41MBWsYsD4aQhV6L+a0q2aaAE8bKRluSJfsK1+qOIegdS7YHTgiG6LGDzP7GCpufxIZsJyHk+dIdha9HasR8rASWej1bRkGk547P41iG2ggMojjSBAlhy6U0+TqnTffj7gbnuVvAyIHSbmvbfzBvHHmxZO5wLn9ISL7cXPQqAq0shW2sdFD4TrzA3xwwc+62xuiSO8Hev3G66ft85VJHZU3Uu4f2fyrBSCa5CKXIUsKoksoGIKQILuw0v7NuZF9YJLpIvj81KpZ3J6d0jqiQuCG8F2zlMWwUiJjKhqMK47ZY3ZXniHlo=

!recovery 1 600000 IsYI4KGsooCuy9G4l3i4Ew== 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
`
