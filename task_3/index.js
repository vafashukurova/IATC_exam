const turnArray=(arr)=>
arr[0].map((i) => arr.map(row => row[i]).reverse())

console.log(turnArray( [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
   ]));

