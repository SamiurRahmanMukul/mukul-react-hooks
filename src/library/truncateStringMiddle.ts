/**
 * Truncates a string in the middle if it exceeds the maximum length.
 * @param {string} str - The string to truncate.
 * @param {number} max - The maximum allowed length (default: 10).
 * @param {string} sep - The separator to use in the middle (default: "...").
 * @returns {string} The truncated string with separator in the middle if it was truncated, or the original string.
 */
export default function truncateStringMiddle(
  str: string,
  max: number = 10,
  sep: string = "..."
): string {
  const len = str.length;
  if (len > max) {
    const sepLen = sep.length;

    if (sepLen > max) {
      return str.substr(len - max);
    }

    const n = -0.5 * (max - len - sepLen);
    const center = len / 2;
    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n);
    return front + sep + back;
  }
  return str;
}
