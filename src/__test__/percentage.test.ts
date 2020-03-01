import { percentage } from '../index';
test('number utils percentage test', () => {
  expect(percentage(0.123, 2)).toBe('12.30%');
  expect(percentage(0.000001, 3)).toBe('0.000%');
});
