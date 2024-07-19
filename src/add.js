function add(string) {
  if (string == "") {
    return 0;
  }

  let delimiter = ",";
  if (string.startsWith("//")) {
    const delimiterIndex = string.indexOf("\n");
    if (delimiterIndex !== -1) {
      delimiter = string.substring(2, delimiterIndex).trim();
      string = string.substring(delimiterIndex + 1);
    }
  }

  string = string.replace(new RegExp(`\n|${delimiter}`, "g"), ",");
  console.log(string);
  const numArr = string.split(",");
  //   return parseInt(numArr[0],10)+parseInt(numArr[1],10);
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i], 10);
  }

  //negative number
  const negativestring = numArr.filter((i) => i < 0);

  if (negativestring.length > 0) {
    throw new Error(negativestring);
  }

  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum = sum + numArr[i];
  }

  return sum;
}

module.exports = add;
