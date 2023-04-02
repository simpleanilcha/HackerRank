// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  return ar.reduce((accum, curr) => accum + curr, 0)
}

console.log(simpleArraySum([1, 2, 3]))
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))