/**
 * precise 精确化处理因对浮点数进行计算其计算结果精度丢失问题
 * eg: 0.1+0.2 计算结果为 0.30000000000000004
 * @param {Number} source 数字
 * @param {Number} precision 精度(取值范围 1～100)，默认值为12是经验值，一般选12就能解决掉大部分0001和0009问题
 */
export function precise(source: number, precision: number = 12) {
  return parseFloat(source.toPrecision(precision))
}
