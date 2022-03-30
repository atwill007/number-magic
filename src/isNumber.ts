import { MIN_SAFETY_NUMBER, MAX_SAFETY_NUMBER } from './utils/constants'

/**
 * isNumber
 * 检查入参是否为 number
 *
 * @param {*} source 任意类型的入参
 * @returns {boolean} 是否为数字
 */
export function isNumber(source: any, checkSafetyNumber: boolean = false): boolean {
  const isNumb: boolean = typeof source === 'number' && isFinite(source)
  if (isNumb && checkSafetyNumber) return source <= MAX_SAFETY_NUMBER && source >= MIN_SAFETY_NUMBER
  return isNumb
}
