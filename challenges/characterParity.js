/*
Given a character, check if it represents an odd digit, an even digit or not a digit at all.
Example
For symbol = '5', the output should be
characterParity(symbol) = "odd";
For symbol = '8', the output should be
characterParity(symbol) = "even";
For symbol = 'q', the output should be
characterParity(symbol) = "not a digit".
*/

// function characterParity(symbol) {
//   // Turn the string into a number
//   let num = parseInt(symbol, 10);

//   // If num is not a number it's a letter
//   if (isNaN(num)) {
//     return 'not a digit';
//   } else {
//     if (num % 2 === 0) {
//       return 'even';
//     } else {
//       return 'odd';
//     }
//   }
// }

function characterParity(symbol) {
  let d = symbol.codePointAt(0) - 48;
  console.log(d);
  if (d >= 0 && d <= 9) return d % 2 == 0 ? 'even' : 'odd';
  return 'not a digit';
}

console.log(characterParity('321'));
