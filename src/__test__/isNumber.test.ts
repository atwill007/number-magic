import { MAX_SAFETY_NUMBER, MIN_SAFETY_NUMBER } from '../utils/constants'
import { isNumber } from '../index'

test('number utils isNumber test', () => {
  expect(isNumber(0.1 + 0.2)).toEqual(true)
  expect(isNumber(+'')).toEqual(true)
  expect(isNumber(10**100)).toEqual(true)
  expect(isNumber(Math.PI)).toEqual(true)

  expect(isNumber(NaN)).toEqual(false)

  expect(isNumber(Infinity)).toEqual(false)
  expect(isNumber(-Infinity)).toEqual(false)

  expect(isNumber(MAX_SAFETY_NUMBER)).toEqual(true)
  expect(isNumber(MAX_SAFETY_NUMBER + 1)).toEqual(true)
  expect(isNumber(MIN_SAFETY_NUMBER)).toEqual(true)
  expect(isNumber(MIN_SAFETY_NUMBER - 1)).toEqual(true)

  expect(isNumber(MAX_SAFETY_NUMBER, true)).toEqual(true)
  expect(isNumber(MAX_SAFETY_NUMBER + 1, true)).toEqual(false)
  expect(isNumber(MIN_SAFETY_NUMBER, true)).toEqual(true)
  expect(isNumber(MIN_SAFETY_NUMBER - 1, true)).toEqual(false)

  expect(isNumber('1')).toEqual(false)
  expect(isNumber(true)).toEqual(false)
  expect(isNumber(null)).toEqual(false)
  expect(isNumber(undefined)).toEqual(false)
  expect(isNumber([])).toEqual(false)
  expect(isNumber({})).toEqual(false)
})
