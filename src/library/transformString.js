export default function transformString(inputString) {
  const stringWithUnderscores = inputString.replace(/\s+/g, "_");
  const transformedString = stringWithUnderscores.toLowerCase();
  return transformedString;
}
