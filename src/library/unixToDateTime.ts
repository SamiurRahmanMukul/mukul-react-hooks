const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Formats a date to AM/PM time format.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted time string in AM/PM format.
 */
function formatAmPm(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridiem = "AM";

  if (hours >= 12) {
    meridiem = "PM";
    hours %= 12;
  }

  hours = hours || 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();

  const strTime = `${hours}:${minutesStr} ${meridiem}`.toUpperCase();
  return strTime;
}

/**
 * Converts a Unix timestamp to a formatted date and time string.
 * @param {number} unix - The Unix timestamp to convert.
 * @returns {string} A formatted date and time string.
 */
export default function unixToDateTime(unix: number): string {
  const date = new Date(unix);
  return `${date.getDate()} ${monthNames[date.getMonth()]?.substring(
    0,
    3
  )} ${date.getFullYear()}, ${formatAmPm(date)}`;
}
