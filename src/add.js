function add(nums) {
  if (nums == "") {
    return 0;
  }

  const numArr= nums.split(',');
  return parseInt(numArr[0],10)+parseInt(numArr[1],10);
}

module.exports = add;
