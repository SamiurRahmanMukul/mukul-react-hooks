import { useEffect, useState } from "react";

/**
 * A custom React hook to manage browser fullscreen functionality.
 * @returns {Object} An object containing the current fullscreen state and a function to toggle fullscreen mode.
 */
function useFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullScreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  return { isFullScreen, toggleFullScreen };
}

export default useFullScreen;
