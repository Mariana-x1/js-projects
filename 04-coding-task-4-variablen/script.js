//01) Spot the errors and fix them
// const userName = "Brad";
let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return userName.length >= 4;
  //   return userName.length > 4;
}
console.log(getUserNameLength(userName.length));
console.log(userName);
//////////////////////////////////  EIN BEISPIEL:
const myString = "Mariana";

myString.length = 4;
console.log(myString); // "Mariana"
console.log(myString.length); // 7
//////////////////////////////////////////////////
