function genPass() {
                var pwdGen = '';
                var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

                for (var j = 0; j < 3; j++) {
                    var rand = Math.floor((Math.random() * 10) + 17);
                    pwdGen += rand.toString() + uCase[rand - 1] + lCase[rand - 1];
                }
                return pwdGen;
            }
