/**
 * Converts an array to a comma-separated text string.
 * @param {any[]} array - The array to convert to comma-separated text.
 * @returns {string} A comma-separated string representation of the array, or "N/A" if the array is empty or undefined.
 */
export default function arrayToCommaSeparatedText(array: any[]): string {
  return array?.length > 0
    ? array
        .map((item) => item)
        .join(", ")
        .toString()
    : "N/A";
}
