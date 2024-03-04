import { useCallback, useEffect, useMemo, useRef } from "react";

/**
 * Custom React hook to handle a timeout and execute a callback function after the specified delay.
 *
 * @param {Function} callback - The callback function to be executed after the delay.
 * @param {number} delay - The delay in milliseconds before the callback is executed.
 * @returns {Function} A memoized function that can be called to trigger the timeout.
 */
function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const memoizedCallback = useCallback(
    (args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callbackRef.current?.(args);
      }, delay);
    },
    [delay, timeoutRef, callbackRef]
  );

  return useMemo(() => [memoizedCallback], [memoizedCallback]);
}

export default useTimeout;
