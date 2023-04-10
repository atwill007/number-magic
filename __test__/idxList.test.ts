import { idxList } from '../src/index'

test('number utils idxList test', () => {
  expect(idxList(3)).toEqual([0, 1, 2])
  expect(idxList(3, 5)).toEqual([5, 6, 7])
})
