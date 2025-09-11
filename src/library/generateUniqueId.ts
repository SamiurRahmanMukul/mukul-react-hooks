/**
 * Generates a unique identifier string.
 * @returns {string} A unique identifier string based on timestamp and random number.
 */
export default function generateUniqueId(): string {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `uuid-${timestamp}-${hexadecimalString}`;
}
