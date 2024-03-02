import { useState } from "react";

/**
 * Custom React hook to determine if the user is at the top of the page.
 * @returns {boolean} Returns true if the user is at the top of the page, otherwise false.
 */
function useIsTopOfPage() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
