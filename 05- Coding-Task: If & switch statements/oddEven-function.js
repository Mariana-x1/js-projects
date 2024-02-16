//02) oddEven function
// TODO: Implement the oddEven function

function oddEven(Even) {
  if (Even % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
