/**
 * Formats a number by adding commas as thousands separators.
 * @param {string | number} x - The number to format.
 * @returns {string} The formatted number string with commas.
 */
export default function numberFormatWithCommas(x: string | number): string {
  let result = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(result)) {
    result = result.replace(pattern, "$1,$2");
  }
  return result;
}
