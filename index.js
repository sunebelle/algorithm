// 1. task
const numbers = [1, 3, 5, 7, 9];
numbers.sort((a, b) => a - b);
const min = numbers
  .slice(0, 4)
  .reduce((preValue, currentValue) => preValue + currentValue, 0);
const max = numbers
  .slice(-4)
  .reduce((preValue, currentValue) => preValue + currentValue, 0);
console.log(min, max);

// 2. task
function miniMaxSum(array) {
  if (array.length < 5) {
    return;
  }
  array.sort((a, b) => a - b);
  const min = array
    .slice(0, 4)
    .reduce((preValue, currentValue) => preValue + currentValue, 0);
  const max = array
    .slice(-4)
    .reduce((preValue, currentValue) => preValue + currentValue, 0);

  console.log(min, max);
}
const input = "1 2 3 4 5";
const arr = input.split(" ").map(Number);
miniMaxSum(arr);
// miniMaxSum([1, 2, 3, 4, 5]);

// 3. task
//Number
const a = 1;
const b = 2;
const c = 3;
const d = 4;
const x = 5;
function sumNumbers(exceptNo) {
  let sum = a + b + c + d + x;
  if (exceptNo) {
    sum = sum - exceptNo;
  }
  console.log(sum);
  //   if (exceptNo === a) {
  //     console.log(b + c + d + x);
  //   } else if (exceptNo === b) {
  //     console.log(a + c + d + x);
  //   } else if (exceptNo === c) {
  //     console.log(a + b + d + x);
  //   } else if (exceptNo === d) {
  //     console.log(a + b + c + x);
  //   } else if (exceptNo === x) {
  //     console.log(a + b + c + d);
  //   }
}
sumNumbers(1);

// Array
const initialArray = [1, 2, 3, 4, 5];
function sumNumbersInArray(exceptNo) {
  const filteredArray = initialArray.filter((el) => el !== exceptNo);
  const sumNumOfFilteredArray = filteredArray.reduce(
    (preValue, currentValue) => preValue + currentValue,
    0
  );
  console.log(sumNumOfFilteredArray);
}
sumNumbersInArray(1);
