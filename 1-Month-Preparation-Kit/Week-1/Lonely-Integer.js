// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem

function lonelyinteger(a) {
  const filteredArray = a.filter(num => a.indexOf(num) === a.lastIndexOf(num))
  return filteredArray[0]
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))