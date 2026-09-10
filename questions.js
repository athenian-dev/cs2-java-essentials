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
!lock 1 100000 Sn4V8mK/92mRk6XLSU+CBA==

!q 94BU+fWBLTrKUVNpeKEva6h2HkeBR2fduzA5dxXuEk21d3AdjOlsYXf/8Q75L7LZiFZokQkxtK/cA9UT5AJDt/tggaRlAKc9RPAxNm9jYAbJNqPTwVun7tJzkRGxQJy2W+zpIglYN8/k0aZ/+9oH95eTf1ho76HYuzYBuQBTptM6po8OzuAuNdUni+CGiZX+SMWXlT8uDOsPI50vlyKKATLSHhAhFA0f0v/IL9SdnxT0GDI6wQtewUyLYvs0w5yvHEYL/KDjBRuZzYu0kDEgTXR6vDDKGerKtpWtx/RgJznu6Si2wN/PJuH08VQ7hXDE222LPWvOsFMgTI1REjEctSizX/9ckd8qdgdUM7u81PxH2nkWKoj/gWcUg0PXzGTZvv5iv6BPcFir8s8CHRH7KmPd28wGxM2D+5/OJRONr4hVZjDy4Z2echXBFO9TfdiMRCr/LkcU2GNFW0O/eB6EIF+MYSBLF16j2TQSCP2AO20DhLkUDem5yRLG52eiMPyT8y5Gf9b/KHHYedo7g9CXbUQK9ikr7cm6hwnLqxIjm8XArcKcjli90UtH6JXR41lo1CSF4Ip6EczOlpf7TjusbA7pAVQh5xZNIAc5Fm/mf2jAVVd3zDHE5igtu4eLcCWa+xkTNTcdX4cn43IEltYmIZOF

!q 3Tbqv7DcM8rdNigyDDk6AF996L7TY/hrMkHTDuphViRV/gJD6Pu0MgdN8ghJ6qbtnnDHFonkbk1r1lWBqDbm5m9Fk1QNpRb08NJaKG4w+xhkJ4+A6StkL+xzcLhgTAmtR5SBT4mFH/0nuWcg9YknT3tHXSInioEQK9HAiqW5AVm8ltZdK194tc4PTeQBwLiTicqj6xOyFYxgSdi0DREgZpTY1Zqkhq1wy7wxgVT0Fq7+01LTrju1W8K8RyPheSc7LdKRX5ZIk3ps8k9un4KEdIU6bOoe6fpVrGkvL+K2wg+928hX5MnzHr5SVU/gMjc+zVRwWtPNPTJ9rB3e+fhXZL9v+Hkq/4Nv/GaqXB8FDz7lniVylym5NA1Wr9a0+iib7W+7OwubCmQ9Te7CC69uge9SH0OucuHxt5/5cUSfHK8mVqkargQ19JBS4Kk7Ao1uh373tEROpo6mtwqzauDRWbuIHt2K6SIHksost2pvnlotcR+c4kgmVxJxQ4tnoxzvMuwf7p9lNQ3m1RU4hvyosJcuCXQRFvq5khhaGqnCGIT8Q8w/6nKmI+WNC+Oyaj/hFlPRVoCkHUlmG6IEMHtd0g9Ii9ZOqYJIdPUHhNVDz4LMwGi8bF0CUF/ku91IjRc=

!q 9Be2mJ8BbNFWwuvEc8/IAtbLYzy3AC9J3AswsEumAOXwxts1HRvNPPvT7h0TGBozy/8Ucu89C4k/XAck4fyxSa8Y3IGcEXyXgJkImazLIazZPBxsodzeaAFNYx4DrXTF2RNiBR6h072DfhRxFOr4ZQ/wYcwJWcA9qs0rI+SCHy0yWkCYUOelQGm5MwKHCnnLYUhl0hBk8QsaejJJHiMVpSE9w/0lN+gjVEP1i49SHgBCT/1in7Wmr5UwIqBXlPlcE9LD/x/BoOXfeREO0ZQ1P4gb6GGG3x4nExSVEbGkT5DitZ9ntB5G9ljv+36mJ9XsslUHS6WAlO8ET5TKZytHj9WPAZIpPqSRsKU/UJsZZ8Ja4CrfKXuIAdRn6piRGH5i8xNuvmpJxkVUgj/h1Sw5ZC2cH8972SZpx8MsYrmxbLAa9bHigHrMUxFlFw/wul4N4/CK5h87BfKhzatLNiXXff8LAta4Hg==

!q bKyfcjRtA9wzGjzRU7R5H11itdXMYzw5IiAC9w1a+urAqFq4RhmRCZahUPhedJJ0l/Kdur+sAMZthnOehWtmlLDcsUAVrW+8JuUDjLe5fmeSK+5NmLAqJ/liVrKC97PIBhDGMTEVmDu+17ufAKchHNjm6VASOjU5L9kuxVK9qZaESG4w+7k2+bAUKVF+4qxsCe5MsdNoV4grQRD+FX4AGD4yQbX6Ul5/ReDHOAQSgnbdiFYacgPzfKKGEU7F9om/REoDhdJPJ6qWNOJYeQa8MTdYnJP3u6LtSJeuuWb7bKBuzXba52BvYjMiyyqaEYLxyv112NB4pHMLbIpCMk6XKBfzt4+QxMpBxOzXRdPRzEmJg9Uzw7W1kdQ090lS0q073+h6pzEC5OmPVflRQJr3WTlsNNuIvCHBbTvoXN1E4Vn10ZU3SlB95C9OEeIwtcoiGkUU5LPx5DxEUUYceAx5ue4rWKrFK/TQFV8vHz9rXc/v9kJ8Lb7qGPsYUyDTuYcHIB2wY+v/+a5Ll4o8EXwdzSg1XiUCr/74rePsogbVKxEOeFNa8fJflBCpcsT8vSvu3iHUhjJnS8pTDlof1vxU+Yz3U2nmHny0x9N5wcPsi3C3bmyGsVDigsW2UjdbdKB6tHv/W+IcWcoW8CP2c6QDFjrtoxk0uzSRFbyrqNorIfTYKBJuLXpiSDlMTn7QDUbYpmZT5cmwy6LUJuYuXuCP2xkxPsg01frInKxpFuCpPgfLeGD+RXbC08RCELsvpiBGnga1KPbv7M9N8RYt

!q Gar5QpqhSVIfOqoOwh5gY7MORamZpdj03mSjsdJIL0ZsYbiRHOIwq2sIyCkROGrElBaxlPTLdLUSpCZ+e8DOArWvOqqIkpVbIMkIG5OH5DaaAFClC82XSYsBGT9lJCI+32Ix8fPYMPQ5KWyGJdNcv3liAw/eMihT2xTXLx0R+rj9bCDAGmdknnxsFSrzAza8u5gmJK/++LzeUtxf5hGkO+RF+HNfFcFqzRVeCSUqxUPeom7LF+/zSiK5XmK38I3oh24/ashzxZuEBXw7CsQdr3FA/Eh8rOTIc+dDrmKo7C4PJNsgUrQbgEnGQwch7ltL+rH1Ph02C2RTsMVgoWvEC7+tPtV1Q9lNg6ElPocpkxpU0O90PnAVJ9HbWr7YzTCKTzpqBcrwqOauAfASYFfDHKLhVDSRbewgbqj3cKr/EGgo

!q KRp1G3Y3mZTweqY/WmxFB92QYh1Gy0dOXn2Bp0I0LfjKGzBXNDIYwSDbHGHZdBVvPHTk/gmMcqgfXhcw70xKm8/JHl3y9B4hz76Pl0Q3tor5hjM8XABZhBA18gzy+LPSoyim4hRJhjveDyrTVYX2Qv5WJVNvbbatby7pIIhDXM3d/W7MwTD7fLKo6aZHu1o0e46TaH0hqjpAhRllYMSUy0ufHZ1Gx/ep8Wx7GGO5K3b/281nPZC4PFaUEQdlwQUdU2+gRYe52EEftAF/8XT/U2d8Sn1X2na1Tc8HmWneB7Xbx9busFN9Fz3qwgagQCTJ13rbgoSHBNTWKLvQRyTsbtRrwB8QlB/CBsvWHirFtBVVPB6Iul7jAibJgxnGBg4tvUeA0HDf0fn6y48gVrByFyFYyiMLpLMNC6JmzXTDCMxdHxLX0Rj+bhMJ4Hy2CQT8mmx9tBrNpT41k3JluHf6kxdKX+jUYh35bIgFj7Pu7HXQuaNqBJkTFIqypoTqv2F4oMgr6ObUzbhf/dE30nF2DwcWpFMkMg==

!q Z0U04aqGIHRb00bCSC/qWwTFqdEosKzvg+6RNyaDvZigNcCCBSCx7XapJjFuLOedOsZFj0QQU5s2/WMMiklQrX4Qbxrfe8G4dhrXYB9TFTGpD+opLq46J7DaibEHBEtEfcmKfPucx55ZGPikl8bsTzmDZKzXx3PuKBxz7g43dSeE3WKuIscBnVgUbd2zmUQwIPJ/WZTy3AJk5iBzHUqP+9GAgyisc/smx31DCfO0Pe1i+wTwH+Eti1fdf4QRy2/Yl2/axH07LHJB8HjrgFD3mzSGmV6nfKjO8M0QD+AOBQL2jgffLM96/yv6b92OYCo0nPajIOQmUDFlDkx3EGDGfXvjqVWzuzxRNv4yuPkd2aINyQM2uPthG5shssMHxZK++HAsUoPM56qa8/WtuDeOD/dq7AYZnkcYqTtSTHU94eC4Oz0ujqXBwdSN9cxE9Yc4lOnKcNeGeQDuO3GV9hXEXChvM6E7jKzkRX11aE6WaKdzNEjT4a+ALsh4aMVfgDdYdbyEtqvt9JiLIWUw3Ihto00kRLYF9VJOo0oEctYlwO48Aoq2p8gYBbo9E9QQWxRQnFsTySTjFWae4x/kr/U/3MI=

!q 7ILTjx9e6TJGqbBDZYCofa4jbHkSX+oU9G19HjeJ9CkkFe55Gt6S5RkJQg4SD3DTgKd8pa/PrW4iXcXvqXWcPHyD17C4VtnmCireXXPyRPnV0akNL2PWfJs2bywcYLRbz6lLmuzdoXWfIAUfWbf1qzBo/wSCHOnJg1fCwufzq6ZedEQ1AYzN/3OqVmKYI6buM9FG5ehjS6Gdo8AuzWwpCdtIFsi5dkhTBFMayaHX82lyNF3NHoCbfHK7kE1Bbmj43njSi2YbORVxDA+f4tagBoxwCwNMlX7EK5RNwCDbWZUHbCfRct1sGh4J3tnuMEFU7eW5HS7xh2NGzJKif1sHcNpF7tN5zMHp3wfy/vzmJ+hbCw6VtgSMGt4Ebyj3N2yqfHAwtjIKuMgJkBoGLH0=

!q 73axcK1x3fbWfzsdf2WPUBI7zRiC6MLqwaaWjfWGXgeDkViN7KhTeOG4bMf+cqDXPb8qQqE3ONceAb5511k5qOeD+Z7bprcw/8e2lpMUuieXzuIxt1nGffBaMjEkgsTwO7HKSzoa8NmMx3G7fZ2epDTUD9PFtalPgffVtqtCZ//lOO1rmxprEefaxg2qJYOwxaJrCx5ErRELRBe3tQ+7I+cHntVlH3xrDr5h2iWsrzq3nvxFWMDNX6NQdvoP5uPJ5DQywAqzWP2RZ51WJy/6Di5IRbY0DmKrm/WkA2Kz6RWs51ngZqqz4cYTBO6jTxn5/BSi5pNZI6MFpSG0SXhEmqQWL96Wt6SH5+y+ysx5otouzu9qvyDsMeC1mlOUv2pHMcApxnv0QGGCxwc5+aGZRXIzDzmvILPIzR2M5nj7MVG9VugpgYf4JeDL605MaW+WOV7GBjxdTnO7Ow==

!recovery 1 600000 3siKvT/w3mrbYzYDrPelTw== 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
`
