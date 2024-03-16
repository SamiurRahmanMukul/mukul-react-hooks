export default function truncateStringMiddle(str, max, sep) {
  max = max || 10;

  const len = str.length;
  if (len > max) {
    sep = sep || "...";
    const sepLen = sep.length;

    if (sepLen > max) {
      return str.substr(len - max);
    }

    const n = -0.5 * (max - len - sepLen);
    const center = len / 2;
    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n);
    return front + sep + back;
  }
  return str;
}
