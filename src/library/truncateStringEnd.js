export default function truncateStringEnd(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength)}...`;
  }
  return str;
}
