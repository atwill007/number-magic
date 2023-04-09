import { percentage } from '../index'
test('number utils percentage test', () => {
  expect(percentage(0.123)).toBe('12.30%')
  expect(percentage(0.123, 1)).toBe('12.3%')
  expect(percentage(0.000001, 3)).toBe('0.000%')
  expect(percentage(0.555555, 3)).toBe('55.556%')
})
