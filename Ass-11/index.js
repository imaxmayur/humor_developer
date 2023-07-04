nums = [1, 9, 4, 3, 6, 10, 2, 7, 1, 5]

function missingNumber(nums) {
  for (let n = 1; n<= nums.length + 1; n++) {
    if (nums.indexOf(n) === -1) 
      return n;
  }
}

console.log(missingNumber(nums));
