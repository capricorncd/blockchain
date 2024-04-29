/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/09/08 20:39:26 (GMT+0900)
 */

/**
 * @method padStart(n)
 * @param n `number | string`
 * @returns
 */
export function padStart(n: number | string): string {
  return String(n).padStart(5, '0');
}
