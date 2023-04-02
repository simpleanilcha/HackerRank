// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let scoreOfAlice = 0
  let scoreOfBob = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) scoreOfAlice += 1
    else if (b[i] > a[i]) scoreOfBob += 1
  }

  return [scoreOfAlice, scoreOfBob]
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]))
console.log(compareTriplets([5, 6, 7], [3, 6, 10]))
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))