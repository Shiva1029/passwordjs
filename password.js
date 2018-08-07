const generatePassword = len => {
  let pwdGen = '';
  const charSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '@', '!', '/', '?', '-', ')',
    '"', '#', '^', '*', '(', ']', '{', '}', '[', '%', '_', '+', '=', '~'
  ];
  const min = 0;
  const max = charSet.length - 1;
  for (let j = 0; j < len; j++) {
    pwdGen += charSet[Math.floor((max - min + 1) * Math.random()) + min];
  }
  return pwdGen;
}
