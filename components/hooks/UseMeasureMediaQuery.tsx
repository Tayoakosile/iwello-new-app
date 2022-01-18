import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const UseMeasureMediaQuery = () => {
  // Show Different nav-bars based on device width
  const [toggleNavbar, setNavBarsBasedOnDeviceWidth] = useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  // make sure it is immeidately reflected
  useEffect(() => {
    isLargerThan768
      ? setNavBarsBasedOnDeviceWidth(true)
      : setNavBarsBasedOnDeviceWidth(false);
  }, [isLargerThan768]);
  return { toggleNavbar };
};

export default UseMeasureMediaQuery;
