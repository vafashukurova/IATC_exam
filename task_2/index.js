function newArr(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      newArray.unshift(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }

  console.log(newArray);
}

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
newArr(arr);
