/**
 * Truncates a string at the end if it exceeds the maximum length.
 * @param {string} str - The string to truncate.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {string} The truncated string with "..." appended if it was truncated, or the original string.
 */
export default function truncateStringEnd(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
}
