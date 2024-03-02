import { useEffect, useState } from "react";

/**
 * Custom React hook to detect whether the specified media query matches the current viewport.
 * @param {string} query - The media query string to match against.
 * @returns {boolean} - Boolean indicating whether the media query matches the viewport.
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
