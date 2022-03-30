/**
 * sum 数字求和
 * @param args number[]
 * @returns number
 */
export function sum(...args: number[]): number {
  return args.reduce((finalValue, current) => {
    return (finalValue += current)
  }, 0)
}
