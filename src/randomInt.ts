/**
 * randomInt 结果整数r满足 min ≤ r ≤ max
 * @param {Number} min
 * @param {Number} max
 */
export function randomInt(min: number, max: number = min) {
  min = Math.round(min + 0.4999999) // 这里min如果带小数则向上取整
  max = Math.round(max - 0.5) // 这里max如果带小数则向下取整
  if (min < 0 || min > max) return -1
  return Math.round((max - min) * Math.random()) + min
}
