/* 02) isString function
Implement a isString function.*/

// TODO: Implement the isString function
/*
console.log(isString1("Hello"));
// result should be true

console.log(isString2(3));
// result should be false

console.log(isString3(undefined));
// result should be false

console.log(isString4(""));
// result should be true

console.log(isString5("John" + "Doe"));
// result should be true */

//one:

const isString1 = (value) => {
  return typeof value === "string";
};

console.log(isString1("Hello")); //true

//two:

const isString2 = (value) => {
  return typeof value === "string";
};

console.log(isString2(3)); //false

//three

const isString3 = (value) => {
  return typeof value === "string";
};

console.log(isString3(undefined)); //false

// four

let isString4 = (value) => {
  return typeof value === "string";
};

console.log(isString4("")); // true

// five
const isString5 = (value) => {
  return typeof value === "string";
};

console.log(isString5("John" + "Doe")); //true

////////////////////////////////////////////////////
/* 02) isString function
// TODO: Implement the isString function*/

//2. Variante: Function Expression:
const isString6 = function (word) {
  return typeof word === "string";
};
console.log(isString6("John" + "Doe")); //true
