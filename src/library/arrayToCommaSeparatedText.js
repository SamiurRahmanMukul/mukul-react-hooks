export default function arrayToCommaSeparatedText(array) {
  return array?.length > 0
    ? array
        .map((item) => item)
        .join(", ")
        .toString()
    : "N/A";
}
