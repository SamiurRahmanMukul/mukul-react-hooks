import { useCallback, useEffect, useState } from "react";

// TypeScript interfaces for browser APIs
interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element | null;
  webkitFullscreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  mozCancelFullScreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

interface DocumentElementWithFullscreen extends Element {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface UseFullscreenReturn {
  isFullscreen: boolean;
  toggleFullscreen: () => Promise<void>;
}

// Helper functions to handle vendor-prefixed full screen methods
const requestFullscreen = (): Promise<void> => {
  const element = document.documentElement as DocumentElementWithFullscreen;

  if (element.requestFullscreen) {
    return element.requestFullscreen();
  }
  if (element.mozRequestFullScreen) {
    // Firefox
    return element.mozRequestFullScreen();
  }
  if (element.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    return element.webkitRequestFullscreen();
  }
  if (element.msRequestFullscreen) {
    // IE/Edge
    return element.msRequestFullscreen();
  }
  return Promise.reject(new Error("Fullscreen API is not supported!"));
};

const exitFullscreen = (): Promise<void> => {
  const doc = document as DocumentWithFullscreen;

  if (doc.exitFullscreen) {
    return doc.exitFullscreen();
  }
  if (doc.mozCancelFullScreen) {
    // Firefox
    return doc.mozCancelFullScreen();
  }
  if (doc.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    return doc.webkitExitFullscreen();
  }
  if (doc.msExitFullscreen) {
    // IE/Edge
    return doc.msExitFullscreen();
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
 * @return {UseFullscreenReturn} An object with the following properties:
 *   - `isFullscreen` (boolean): Indicates whether the browser is currently in fullscreen mode.
 *   - `toggleFullscreen` (function): Toggles the fullscreen mode on and off.
 */
const useFullscreen = (): UseFullscreenReturn => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleChange = useCallback(() => {
    const doc = document as DocumentWithFullscreen;
    setIsFullscreen(
      doc.fullscreenElement != null ||
        doc.mozFullScreenElement != null ||
        doc.webkitFullscreenElement != null ||
        doc.msFullscreenElement != null
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

  const toggleFullscreen = useCallback((): Promise<void> => {
    if (isFullscreen) {
      return exitFullscreen();
    }
    return requestFullscreen();
  }, [isFullscreen]);

  return { isFullscreen, toggleFullscreen };
};

export default useFullscreen;
