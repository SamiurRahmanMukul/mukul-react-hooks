import { useEffect } from "react";

/**
 * A custom React hook that provides functionality for handling unsaved changes and displaying an alert when attempting to leave the page.
 *
 * @param {boolean} hasUnsavedChanges - Indicates whether there are unsaved changes.
 * @returns {void}
 */
const useUnsavedChangeAlert = (hasUnsavedChanges) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        return "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);
};

export default useUnsavedChangeAlert;
