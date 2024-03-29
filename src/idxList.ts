/**
 * idxList 根据指定的数组长度，生成由数组索引推导出的数组
 * @param {Number} len
 * @param {Number} delta 数字增量
 * @returns {String}
 */
export function idxList(len: number, delta: number = 0): number[] {
  return Array.from(Array(len), (_v, k) => k + delta)
}
