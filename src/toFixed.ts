/**
 * toFixed
 * @param {NUmber | String} source 
 * @param {Number} length
 */
export function toFixed (source: number | string, length: number = 2) {
  const str: string = `${source}`
  return parseFloat(str).toFixed(length)
}