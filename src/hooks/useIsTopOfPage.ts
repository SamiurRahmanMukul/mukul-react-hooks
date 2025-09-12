import { useEffect, useState } from "react";

/**
 * Custom React hook to determine if the user is at the top of the page.
 * @returns {boolean} Returns true if the user is at the top of the page, otherwise false.
 */
function useIsTopOfPage(): boolean {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTopOfPage;
}

export default useIsTopOfPage;
