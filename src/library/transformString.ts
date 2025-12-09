/**
 * Transforms a string by replacing spaces with underscores and converting to lowercase.
 * @param {string} inputString - The string to transform.
 * @returns {string} The transformed string with underscores and lowercase.
 */
export default function transformString(inputString: string): string {
  const stringWithUnderscores = inputString.split(/\s+/).join("_");
  const transformedString = stringWithUnderscores.toLowerCase();
  return transformedString;
}
