/**
 * capital 将数字转换为金额大写格式
 * @param {Number | String} source
 */
export function capital (source: number | string): string {
  let numbStr: string = String(source)
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(numbStr)) return ''
  let unit = '千百拾亿千百拾万千百拾元角分'
  let str = ''
  numbStr += '00'
  let p = numbStr.indexOf('.')
  if (p >= 0) numbStr = numbStr.substring(0, p) + numbStr.substr(p + 1, 2)
  unit = unit.substr(unit.length - numbStr.length)
  for (var i = 0; i < numbStr.length; i++) {
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(Number(numbStr.charAt(i))) + unit.charAt(i)
  }
  return str.
    replace(/零(千|百|拾|角)/g, '零')
    .replace(/(零)+/g, '零')
    .replace(/零(万|亿|元)/g, '$1')
    .replace(/(亿)万|壹(拾)/g, '$1$2')
    .replace(/^元零?|零分/g, '')
    .replace(/元$/g, '元整')
}

