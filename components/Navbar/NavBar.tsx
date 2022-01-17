import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { useMediaQuery } from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  // Show Different nav-bars based on device width
  const [toggleNavbar, setNavBarsBasedOnDeviceWidth] = useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  // make sure it is immeidately reflected
  useEffect(() => {
    isLargerThan768
      ? setNavBarsBasedOnDeviceWidth(true)
      : setNavBarsBasedOnDeviceWidth(false);
  }, [isLargerThan768]);

  return <Headroom>{toggleNavbar ? <DesktopNav /> : <MobileNav />}</Headroom>;
};

export default NavBar;
