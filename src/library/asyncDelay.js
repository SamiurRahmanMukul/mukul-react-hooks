export default function asyncDelay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
