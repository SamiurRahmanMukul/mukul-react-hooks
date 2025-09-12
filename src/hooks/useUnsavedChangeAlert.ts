import { useEffect } from "react";

/**
 * A custom React hook that provides functionality for handling unsaved changes and displaying an alert when attempting to leave the page.
 *
 * @param {boolean} hasUnsavedChanges - Indicates whether there are unsaved changes.
 * @returns {void}
 */
const useUnsavedChangeAlert = (hasUnsavedChanges: boolean): void => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent): string | undefined => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        const message = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message; // For legacy browsers
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);
};

export default useUnsavedChangeAlert;
