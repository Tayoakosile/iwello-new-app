import React from "react";
import Headroom from "react-headroom";
import UseMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


const NavBar = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return <Headroom>{toggleNavbar ? <DesktopNav /> : <MobileNav />}</Headroom>;
};

export default NavBar;
