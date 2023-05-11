test('common matcher', () => {
  expect(3 + 1).toBe(4)
  expect(3 + 1).not.toBe(5)
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number', () => {
  expect(1).toBeGreaterThan(0)
  expect(2).toBeLessThan(3)
})

test('object', () => {
  expect({ name: 'zhangye' }).toEqual({ name: 'zhangye' })
})
