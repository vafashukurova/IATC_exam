function missingNumber (a){
  var count = 0;
  var missingNum = []

for (let i = 0; i <= a.length; i++) {
  count++;
  if (a[i]==count) {
    continue;
  }

  else{
    missingNum.push(count)
  }
  count++;
 
}
console.log(missingNum);
}

missingNumber([1,2,4,5])