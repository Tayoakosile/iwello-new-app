import React, { useEffect, useState } from "react";

// Check to see if page is fully loaded
const usePageFullyLoaded = () => {
  const [pageFullyLoaded, setPageFullyLoaded] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPageFullyLoaded(false);
    }, 3000);
  }, []);

  return { pageFullyLoaded };
};
export default usePageFullyLoaded;
