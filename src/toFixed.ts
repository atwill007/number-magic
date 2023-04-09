import { precise } from './precise'

/**
 * toFixed
 * @param {Number | String} source
 * @param {Number} digits
 */
export function toFixed(source: number | string, digits: number = 2): string {
  let num: number = parseFloat(`${source}`)

  const times = Math.pow(10, digits)
  // 0.5 为了四舍五入
  num = precise(num * times + 0.5)
  // 去除小数
  num = parseInt(`${num}`, 10) / times

  return precise(num).toFixed(digits)
}
