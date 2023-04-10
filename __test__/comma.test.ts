import { comma } from '../src/index'

test('number utils comma test', () => {
  expect(comma(123.123)).toBe('123.123')
  expect(comma(12345.123)).toBe('12,345.123')
})
