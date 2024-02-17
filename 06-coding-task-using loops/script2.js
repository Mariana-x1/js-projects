//02) charCount function
// TODO: Implement the charCount function
function charCount(word, char) {
  let result = 0;
  word = word.toLowerCase();

  char = char.toLowerCase();
  if (char.length > 1) {
    return "Please only search for one single character!";
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === char) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
