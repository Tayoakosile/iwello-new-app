import Head from "next/head";
import React from "react";
import AboutUs from "../components/Home/AboutUs";
import ContactUs from "../components/Home/ContactUs";
import DesktopAboutUs from "../components/Home/DesktopAboutUs";
import DesktopHeaderText from "../components/Home/DesktopHeaderText";
import Footer from "../components/Home/Footer/Footer";
import FreeTrial from "../components/Home/FreeTrial";
import HeaderText from "../components/Home/HeaderText";
import Services from "../components/Home/Services";
import Suscribe from "../components/Home/Suscribe";
import Testimonials from "../components/Home/Testimonials";
import UseMeasureMediaQuery from "../components/hooks/UseMeasureMediaQuery";
import NavBar from "../components/Navbar/NavBar";
import MetaTags from "../reusables/MetaTags";

const index = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <>
      <MetaTags
        title="Home ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
        description="Find trusted
medical personnel close to your location as fast 
as lightning for less than a dollar!"
      />

      <NavBar />
      {toggleNavbar ? <DesktopHeaderText /> : <HeaderText />}
      {toggleNavbar ? <DesktopAboutUs /> : <AboutUs />}
      <Services />
      <Testimonials />
      <FreeTrial />
      <Suscribe />
      <ContactUs />
      <Footer />
    </>
  );
};

export default index;
