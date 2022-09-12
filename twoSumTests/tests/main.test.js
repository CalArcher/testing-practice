const twoSum = require('../main')

let tests = [
  {
    array: [1, 2, 3, 4, 5, 6],
    target: 6,
    expect: [0, 4]
  },
  {
    array: [4, 6, 7, 2, 0, 11],
    target: 18,
    expect: [2, 5]
  },
  {
    array: [3],
    target: 33,
    expect: []
  }
]

test('properly finds two numbers from input array that add up to target number', () => {
  expect(twoSum(tests[0].array, tests[0].target)).toEqual(tests[0].expect)
  expect(twoSum(tests[1].array, tests[1].target)).toEqual(tests[1].expect)
  expect(twoSum(tests[2].array, tests[2].target)).toEqual(tests[2].expect)
})
