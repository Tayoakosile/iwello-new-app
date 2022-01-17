import Headroom from "react-headroom";
import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  return (
    <Headroom>
      {/* Mobile view navbar */}
      <MobileNav />
      {/* Desktop view navbar */}
      <DesktopNav />
    </Headroom>
  );
};

export default NavBar;
