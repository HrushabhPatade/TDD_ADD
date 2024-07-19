function add(nums) {
  if (nums == "") {
    return 0;
  }

  nums = nums.replace(/;\n/g, ",");

  const numArr = nums.split(",");
  //   return parseInt(numArr[0],10)+parseInt(numArr[1],10);
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i], 10);
  }

  //negative number
  const negativeNums = numArr.filter((i) => i < 0);

  if (negativeNums.length > 0) {
    throw new Error(negativeNums);
  }

  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }

  return sum;
}

module.exports = add;
