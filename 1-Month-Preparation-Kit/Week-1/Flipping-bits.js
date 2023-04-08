// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem

function flippingBits(n) {
  return (~n >>> 0)
}

// another method
// function flippingBits(n) {
//   const bits = n.toString(2).padStart(32, 0).split("")
//   const fliped = bits.map((bit) => (bit == 0 ? 1 : 0)).join("")
//   return parseInt(fliped, 2)
// }

console.log(flippingBits(9))
console.log(flippingBits(2147483647))
console.log(flippingBits(1))
console.log(flippingBits(0))