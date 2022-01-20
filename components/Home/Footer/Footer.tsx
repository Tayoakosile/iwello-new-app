import React from "react";
import UseMeasureMediaQuery from "../../hooks/UseMeasureMediaQuery";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return <>{toggleNavbar ? <DesktopFooter /> : <MobileFooter />}</>;
};

export default Footer;
