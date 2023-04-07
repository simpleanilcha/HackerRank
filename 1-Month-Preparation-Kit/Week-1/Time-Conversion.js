// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem

function timeConversion(s) {
  const time = s.slice(8)
  let hour = Number(s.slice(0, 2))
  let minsec = s.slice(2, 8)

  if (time === 'PM') {
    if (hour !== 12) hour += 12
  } else if (time === 'AM') {
    if (hour === 12) hour = '00'
    else if (hour < 10) hour = '0' + hour
  }

  return hour + minsec
}

console.log(timeConversion('12:01:00PM'))
console.log(timeConversion('12:01:00AM'))
console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('07:05:45AM'))