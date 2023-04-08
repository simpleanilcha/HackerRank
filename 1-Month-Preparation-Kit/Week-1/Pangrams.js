// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem

function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  s = s.toLowerCase()

  for (let i = 0; i < alphabet.length; i++) {
    if (!s.includes(alphabet.charAt(i))) return 'not pangram'
  }

  return 'pangram'
}

// ANOTHER WAY
// function pangrams(s) {
//   let letters = 'abcdefghijklmnopqrstuvwxyz';

//   //remove spaces from string s
//   let s1 = s.replace(/\s/g, '');
//   console.log(s1)
//   //convert all the letters to lowercase
//   let s2 = s1.toLowerCase();
//   //split the letters into a separate letter
//   let s3 = s2.split('');
//   //create a new array without repetitioon of elements
//   let s4 = [...new Set(s3)];
//   //sort the array
//   s4.sort();
//   //convert the array back to a sentence of words
//   let s5 = s4.join('');
//   if (s5 === letters) {
//     return "pangram";
//   } else {
//     return "not pangram";
//   }
// }

console.log(pangrams('The quick brown fox jumps over the lazy dog'))
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))
