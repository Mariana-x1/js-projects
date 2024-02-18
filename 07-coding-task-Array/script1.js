01) removeItem function
// TODO: Implement the removeItem function

function removeItem(arr, number) {
  if (number < 1) {
    return arr.slice();
  }
  const newArray = arr.slice();

  newArray.splice(number - 1, 1);
  return newArray;
}
const animals = ["Dog", "Cat", "Lion"];
const fruits = [
  "Waretmelone",
  "Banana",
  "Cherry",
  "Kiwi",
  "Pineapple",
  "Apple",
];

console.log(removeItem(animals, 1));
console.log(animals);

console.log(removeItem(fruits, 3));
console.log(fruits);

function removeItem(arr, number) {
  let result = arr.slice(); // Make a copy of the original array
  for (let index = 0; index < result.length; index++) {
    if (index + 1 === number) {
      // Adjust index by adding 1
      result.splice(index, 1); // Remove the item at the specified index
      break; // Exit the loop after removing the item
    }
  }
  return result; // Return the modified array
}

const animal = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1)); // ["Cat", "Lion"]
console.log(removeItem(animals, 2)); // ["Dog", "Lion"]
console.log(removeItem(animals, 3)); // ["Dog", "Cat"]
