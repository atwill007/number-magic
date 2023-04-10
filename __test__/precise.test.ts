import { precise } from '../src/index'

test('number utils precise test', () => {
  const numb = 0.1 + 0.2
  expect(precise(numb)).toEqual(0.3)
  expect(precise(numb, 17)).toEqual(0.30000000000000004)
  expect(precise(numb, 1)).toEqual(0.3)
  expect(precise(numb, 2)).toEqual(0.3)
})
