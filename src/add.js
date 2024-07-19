function add(nums) {
  if (nums == "") {
    return 0;
  }

  const numArr= nums.split(',');
  return numArr[0]+numArr[1];
}

module.exports = add;
