/**
 * Converts a numeric value to a formatted international currency string with abbreviations.
 * @param {string | number} labelValue - The numeric value to convert.
 * @returns {string | number} The formatted string with B/M/K abbreviations, or the original number if less than 1000.
 */
export default function internationalCurrencyConvert(labelValue: string | number): string | number {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(0)} B` // Six Zeroes for Millions
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(0)} M` // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(0)} K`
    : Math.abs(Number(labelValue));
}
