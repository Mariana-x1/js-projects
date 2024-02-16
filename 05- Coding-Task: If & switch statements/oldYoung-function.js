/*03) oldYoung function
Implement a oldYoung function.

 The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter
// TODO: Implement the oldYoung function*/

function oldYoung(number) {
  if (number < 16 && number >= 0) {
    return "children";
  } else if (number < 50 && number >= 16) {
    return "young person";
  } else if (number >= 50) {
    return "elder person";
  } else {
    return "invalid person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
