function add(nums) {
  if (nums == "") {
    return 0;
  }

  const numArr= nums.split(',');
//   return parseInt(numArr[0],10)+parseInt(numArr[1],10);
for(let i = 0; i<numArr.length; i++){
    numArr[i] = parseInt(numArr[i], 10);
}

let sum =0;
for(let i=0; i<numArr.length; i++){
    sum = sum + numArr[i];
}

return sum;

}

module.exports = add;
