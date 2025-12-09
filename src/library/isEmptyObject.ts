/**
 * Checks if an object is empty (has no own enumerable properties).
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export default function isEmptyObject(obj: object): boolean {
  const hasOwn = (
    Object as typeof Object & {
      hasOwn: (target: object, key: PropertyKey) => boolean;
    }
  ).hasOwn;

  for (const prop in obj) {
    if (hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}
