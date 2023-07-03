function findIndex(array, length, n) {
  for (let i = 0; i < length; i++) {
    if (array[i] === n) {
      return i;
    }
  }
  return -1;
}

let ans = findIndex([1,2,5,8,35,45,85,65],8,35);
console.log(ans);