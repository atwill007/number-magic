import { isNumber } from './isNumber'
import { toFixed } from './toFixed'

/**
 * percentage
 * @param {Number or String} source
 * @param {Number} digits
 * @returns {String}
 */
export function percentage(source: number | string, digits: number = 2): string {
  const numb = Number(source)
  if (!isNumber(numb)) return source as string
  return toFixed(numb * 100, digits) + '%'
}
