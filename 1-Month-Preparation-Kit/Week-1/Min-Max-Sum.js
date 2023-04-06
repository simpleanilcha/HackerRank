// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)
  const minVal = arr.slice(0, -1).reduce((accum, curr) => accum + curr, 0)
  const maxVal = arr.slice(1).reduce((accum, curr) => accum + curr, 0)
  console.log(`${minVal} ${maxVal}`)
}

console.log(miniMaxSum([1, 3, 5, 7, 9]))
console.log(miniMaxSum([1, 2, 3, 4, 5]))
console.log(miniMaxSum([7, 69, 2, 221, 8974]))