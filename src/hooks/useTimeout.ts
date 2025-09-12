import { useCallback, useEffect, useMemo, useRef } from "react";

/**
 * Custom React hook to handle a timeout and execute a callback function after the specified delay.
 *
 * @param {Function} callback - The callback function to be executed after the delay.
 * @param {number} delay - The delay in milliseconds before the callback is executed.
 * @returns {Function[]} A memoized array containing the function that can be called to trigger the timeout.
 */
function useTimeout<T = any>(callback: (args?: T) => void, delay: number): [(args?: T) => void] {
  const timeoutRef = useRef<number | null>(null);
  const callbackRef = useRef<(args?: T) => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const memoizedCallback = useCallback(
    (args?: T): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callbackRef.current?.(args);
      }, delay);
    },
    [delay]
  );

  return useMemo(() => [memoizedCallback], [memoizedCallback]);
}

export default useTimeout;
