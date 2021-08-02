const getRandomTests = (tests, max, min) => {
  const arrRandomNumbers = []
  while (arrRandomNumbers.length !== 12) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (arrRandomNumbers.includes(randomNumber)) {
      continue
    }
    arrRandomNumbers.push(randomNumber)
  }
  const array = arrRandomNumbers.map((item) => {
    return tests[item]
  })
  return array
}

module.exports = getRandomTests
