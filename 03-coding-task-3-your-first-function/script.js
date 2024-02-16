//01) Greet function
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

//02) Gross Price Function
// TODO: implement calcGrossPrice function
function calcGrossPrice(netprice, taxrate) {
  //return netprice * (1 + taxrate);
  //console.log(netprice * taxrate);
  //console.log(1 + taxrate);
  return (netprice * (1 + taxrate)).toFixed(2);
  // return netprice + netprice * taxrate;
}
console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//03) Add Positive Function
// TODO: Implement the addPositive function

function addPositive1(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  console.log("hallo");
  return a + b;
}
console.log(addPositive1(2, 3));
// result1 should be 5

function addPositive2(a, b) {
  console.log("hi");
  if (a < 0) {
    a = a * -1;
  }
  if (b < 0) {
    b = b * -1;
  }
  return a + b;
}
console.log(addPositive2(3, -5));
//console.log(addPositive(-3, 3));
// result2 should be 8

function addPositive3(a, b) {
  console.log("hej");
  // return a * b + 1;
  return a * -1 + b * -1;
}
console.log(addPositive3(-1, -8));
// result2 should be 9
