const insurance = require('../insurance.js')

test('formatNumber 1', () => {
  expect(insurance.formatNumber('4155448375')).toBe(('(415) 544-8375'))
})

test('formatNumber 2', () => {
  expect(insurance.formatNumber('1234567890')).toBe(('(123) 456-7890'))
})

test('formatNumber 3', () => {
  expect(insurance.formatNumber('')).toBe(('No phone number on file'))
})
