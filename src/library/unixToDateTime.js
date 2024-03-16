const monthNames = [
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

function formatAmPm(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridiem = "AM";

  if (hours >= 12) {
    meridiem = "PM";
    hours %= 12;
  }

  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${meridiem}`.toUpperCase();
  return strTime;
}

export default function unixToDateTime(unix) {
  const date = new Date(unix);
  return `${date.getDate()} ${monthNames[date.getMonth()]?.substring(
    0,
    3
  )} ${date.getFullYear()}, ${formatAmPm(date)}`;
}
