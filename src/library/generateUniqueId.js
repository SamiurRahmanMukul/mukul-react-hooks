export default function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `uuid-${timestamp}-${hexadecimalString}`;
}
