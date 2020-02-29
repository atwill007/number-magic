/**
 * comma
 * @param {Number or String} source
 * @param {Number} length
 * @returns {String}
 */
export function comma (source: number | string, length: Number = 3): string {
  const arr: string[] = String(source).split('.')
  arr[0] = arr[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), '$1,')
  return arr.join('.')
}
