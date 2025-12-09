/**
 * Synchronously waits for a specified number of milliseconds (blocking).
 * Warning: This function blocks the main thread and should be used with caution.
 * For non-blocking delays, use asyncDelay instead.
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {void}
 */
export default function waitSomeMoment(ms: number): void {
  const start = Date.now();
  let end = start;

  while (end < start + ms) {
    end = Date.now();
  }
}
