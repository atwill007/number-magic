import { randomInt } from '../index'

test('number utils randomInt test', () => {
  expect(randomInt(1.11)).toEqual(-1)
  expect(randomInt(1, 0)).toEqual(-1)
  expect(randomInt(1.51, 2)).toEqual(2)
  expect(randomInt(1, 1)).toEqual(1)
  expect(randomInt(1.1, 1.1)).toEqual(-1)
  const r = randomInt(1, 2)
  expect(r).toBeGreaterThanOrEqual(1)
  expect(r).toBeLessThanOrEqual(2)
})
