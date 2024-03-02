import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * Custom React hook to detect whether the specified media query matches the current viewport.
 * @param {string} query - The media query string to match against.
 * @returns {boolean} - Boolean indicating whether the media query matches the viewport.
 */
function useMediaQuery(query) {
  // State to hold the match result of the media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object with the provided query
    const media = window.matchMedia(query);

    // Check if the initial match status is different from the current state
    if (media.matches !== matches) {
      // Update the match status in the state
      setMatches(media.matches);
    }

    // Function to update the match status when the media query matches change
    const listener = () => setMatches(media.matches);

    // Add a listener to the resize event to track changes in the viewport size
    window.addEventListener("resize", listener);

    // Clean up by removing the event listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  // Return the current match status
  return matches;
}

// PropTypes for the useMediaQuery hook
useMediaQuery.propTypes = {
  query: PropTypes.string.isRequired, // The media query string is required
};

export default useMediaQuery;
