import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const UseMeasureMediaQuery = () => {
  // Show Different nav-bars based on device width
  const [toggleNavbar, setNavBarsBasedOnDeviceWidth] = useState<boolean>(false);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isTabletWidth, setIsTabletWidth] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 700px)");

  useEffect(() => {
    isLargerThan1000 ? setIsTabletWidth(true) : setIsTabletWidth(false);
  }, [isLargerThan1000]);

  useEffect(() => {
    isLargerThan768
      ? setNavBarsBasedOnDeviceWidth(true)
      : setNavBarsBasedOnDeviceWidth(false);
  }, [isLargerThan768]);
  return { toggleNavbar, isTabletWidth };
};

export default UseMeasureMediaQuery;
