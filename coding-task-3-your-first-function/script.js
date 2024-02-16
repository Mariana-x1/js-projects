// TODO: implement welcomeMsg function
function welcomeMsg(name) {
  return "welcome " + name;
}
console.log(welcomeMsg("Jane"));
// Welcome Jane!

function welcomeMsg(name) {
  return "welcome " + name;
}
console.log(welcomeMsg("Marc"));
// Welcome Marc!

/* 02) Gross Price Function
Implement a calcGrossPrice function.

 The first parameter is the net price as integer number
 The second parameter is the tax rate as float number
 The function should return the gross price */

// TODO: implement calcGrossPrice function
function calcGrossPrice(a, b) {
  return a * (1 + b);
}
console.log(calcGrossPrice(20, 0.19));
// result should be 23.8
console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

/* 03) Add Positive Function
Implement a addPositive function.

 The function has two parameters which will always be numbers
 The function should add the two numbers and return the result
 If any of the arguments is a negative number, it should be 
 handled as a positive number (see example code)
// TODO: Implement the addPositive function */

function addPositive(a, b) {
  return a + b;
}
console.log(addPositive(2, 3));
// result1 should be 5

function addPositive(a, b) {
  return b + a;
}
console.log(addPositive(3, -5));
// result2 should be 8

function addPositive(a, b) {
  return a * b + 1;
}
console.log(addPositive(-1, -8));
// result2 should be 9
