import Headroom from "react-headroom";
import React from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <Headroom>
      <MobileNav />
    </Headroom>
  );
};

export default NavBar;
