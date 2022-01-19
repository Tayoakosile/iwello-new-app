import React, { useEffect, useState } from "react";

// Check to see if page is fully loaded
const usePageFullyLoaded = () => {
  const [pageFullyLoaded, setPageFullyLoaded] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setPageFullyLoaded(false);
    };
  }, []);
  return { pageFullyLoaded };
};
export default usePageFullyLoaded;
