// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem

function matchingStrings(strings, queries) {
  const result = []
  queries.forEach(query => {
    let count = 0
    for (let i = 0; i < strings.length; i++) {
      if (strings[i] === query) count++
    }
    result.push(count)
  })
  return result
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))
console.log(matchingStrings(['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'], ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']))