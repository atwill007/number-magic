import { toFixed } from '../index';
test('number utils toFixed test', () => {
  expect(toFixed(123.123, 2)).toBe('123.12');
  expect(toFixed(12345.12345, 4)).toBe('12345.1234');
});