/**
 * percentage
 * @param {Number or String} source
 * @param {Number} length
 * @returns {String}
 */
export function percentage (source: number | string, length: number = 3): string {
  const numb = Number(source)
  if (isNaN(numb)) return ''
  return (numb * 100).toFixed(length) + '%'
}
