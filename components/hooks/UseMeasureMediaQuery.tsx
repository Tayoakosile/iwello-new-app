import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const UseMeasureMediaQuery = () => {
  // Show Different nav-bars based on device width
  const [toggleNavbar, setNavBarsBasedOnDeviceWidth] = useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 1000px)");

  // make sure it is immediately reflected
  console.log(toggleNavbar);
  useEffect(() => {
    isLargerThan768
      ? setNavBarsBasedOnDeviceWidth(true)
      : setNavBarsBasedOnDeviceWidth(false);
  }, [isLargerThan768]);
  return { toggleNavbar };
};

export default UseMeasureMediaQuery;
