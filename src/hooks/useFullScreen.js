import { useCallback, useEffect, useState } from "react";

// Helper functions to handle vendor-prefixed full screen methods
const requestFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    return document.documentElement.requestFullscreen();
  }
  if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    return document.documentElement.mozRequestFullScreen();
  }
  if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    return document.documentElement.webkitRequestFullscreen();
  }
  if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    return document.documentElement.msRequestFullscreen();
  }
  return Promise.reject(new Error("Fullscreen API is not supported!"));
};

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  }
  if (document.mozCancelFullScreen) {
    // Firefox
    return document.mozCancelFullScreen();
  }
  if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    return document.webkitExitFullscreen();
  }
  if (document.msExitFullscreen) {
    // IE/Edge
    return document.msExitFullscreen();
  }
  return Promise.reject(new Error("Fullscreen API is not supported!"));
};

/**
 * Returns an object with two properties: `isFullscreen` and `toggleFullscreen`.
 *
 * `isFullscreen` is a boolean that indicates whether the browser is currently in fullscreen mode.
 * `toggleFullscreen` is a function that toggles the fullscreen mode on and off.
 *
 * This hook listens for changes in the fullscreen mode and updates the `isFullscreen` state accordingly.
 * It adds event listeners for the 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange',
 * and 'msfullscreenchange' events and removes them when the component unmounts.
 *
 * @return {Object} An object with the following properties:
 *   - `isFullscreen` (boolean): Indicates whether the browser is currently in fullscreen mode.
 *   - `toggleFullscreen` (function): Toggles the fullscreen mode on and off.
 */
const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleChange = useCallback(() => {
    setIsFullscreen(
      document.fullscreenElement != null ||
        document.mozFullScreenElement != null ||
        document.webkitFullscreenElement != null ||
        document.msFullscreenElement != null
    );
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("mozfullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);
    document.addEventListener("msfullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("mozfullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("msfullscreenchange", handleChange);
    };
  }, [handleChange]);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      return exitFullscreen();
    }
    return requestFullscreen();
  }, [isFullscreen]);

  return { isFullscreen, toggleFullscreen };
};

export default useFullscreen;
