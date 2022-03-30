import { sum } from '../index'

test('number utils sum test', () => {
  expect(sum()).toEqual(0)
  expect(sum(1, 2, 3)).toEqual(6)
  expect(sum(1.1, 2.2)).toEqual(3.3000000000000003)
})
