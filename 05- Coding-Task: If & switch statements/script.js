/*01) Spot the errors and fix them
 Copy the following complete code block 
 to your script.js file and try to spot and fix the errors.*/

// 1. Variante:
const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result); // Greater than 10
// Returns Greater than 10 but should return Greater than 20

// 2. Variante:
const size1 = 25;
let result1;

if (size1 > 10) {
  result1 = "Greater than 10";
}
if (size1 > 20) {
  result1 = "Greater than 20";
} else {
  result1 = "Lower than 10";
}

console.log(result1); // Greater than 20
// Returns Greater than 10 but should return Greater than 20

// 3. Variante:
const size2 = 25;
let result2;

if (size2 > 10) {
  result2 = "Greater than 10";
}
if (size2 > 20) {
  result2 = "Greater than 20";
}
if (size2 < 10) {
  result2 = "Lower than 10";
}

console.log(result2); // Greater than 20
// Returns Greater than 10 but should return Greater than 20

// 4. Variante:
const size3 = 25;
let result3;

if (size3 > 10 && size3 <= 20) {
  result3 = "Greater than 10";
} else if (size3 > 20) {
  result3 = "Greater than 20";
} else {
  result3 = "Lower than 10";
}

console.log(result3); // Greater than 20
// Returns Greater than 10 but should return Greater than 20
