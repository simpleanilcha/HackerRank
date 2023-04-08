// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem

function diagonalDifference(arr) {
  const leftToRight = arr.map((list, index) => list = list[index])
  const rightToLeft = arr.map((list, index) => list = list[(list.length - 1) - index])

  const ltrSum = leftToRight.reduce((accum, curr) => accum + curr, 0)
  const rtlSum = rightToLeft.reduce((accum, curr) => accum + curr, 0)

  return Math.abs(ltrSum - rtlSum)
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))