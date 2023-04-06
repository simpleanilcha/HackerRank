// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

function aVeryBigSum(ar) {
  return ar.reduce((accum, curr) => accum + curr, 0)
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))