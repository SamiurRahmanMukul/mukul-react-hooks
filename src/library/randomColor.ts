/**
 * Generates a random hexadecimal color string.
 * @returns {string} A random color in hexadecimal format (e.g., "#FF5733").
 */
export default function randomColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase()}`;
}
