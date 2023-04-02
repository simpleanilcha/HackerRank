// https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-one/challenges

function plusMinus(arr) {
  const positiveValues = arr.filter(num => num > 0)
  const negativeValues = arr.filter(num => num < 0)
  const zeroValues = arr.filter(num => num === 0)

  const newArr = [positiveValues.length, negativeValues.length, zeroValues.length]
  newArr.map(numLength => console.log((numLength / arr.length).toFixed(6)))
}

console.log(plusMinus([1, 1, 0, -1, -1]))
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))