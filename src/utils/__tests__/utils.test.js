import { validateName } from '../utils'

test('test valid names', () => {
  expect(validateName('vitalik')).toBe('vitalik')
  expect(validateName('Vitalik')).toBe('vitalik')
  expect(validateName('Vitalik.badass')).toBe('vitalik.badass')
  expect(validateName('sub.Vitalik.badass')).toBe('sub.vitalik.badass')
})

test('test invalid names', () => {
  expect(() => validateName('$vitalik')).toThrowError('Illegal char $')
  expect(() => validateName('#vitalik')).toThrowError('Illegal char #')
  expect(() => validateName('vitalik ')).toThrowError('Illegal char ')
})
