function lengthStr (str) {
  let strArr = [];
  let longLength = 0;
  for (let i = 0; i < str.length; i++) {
    const newStr= strArr.indexOf(str[i]);
    if (newStr !== -1) {
      strArr.splice(0, newStr + 1);
    }
   strArr.push(str[i]);
   longLength = Math.max(longLength, strArr.length);
  }
  return longLength;
};

console.log(lengthStr("abbbcabcdefef"));

