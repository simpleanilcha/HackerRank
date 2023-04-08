// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem

function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  s = s.toLowerCase()

  for (let i = 0; i < alphabet.length; i++) {
    if (!s.includes(alphabet.charAt(i))) return 'not pangram'
  }

  return 'pangram'
}

console.log(pangrams('The quick brown fox jumps over the lazy dog'))
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))
