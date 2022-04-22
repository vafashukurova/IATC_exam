function anagram(str1, str2) {
    return newStr(str1) ===newStr (str2);
  }
  
  function newStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().toUpperCase().split('').sort().join('');
  }

  console.log(anagram('finder', 'Friend'))