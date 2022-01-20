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

const index = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <>
      <Head key="home">
        <title>Talk To a Doctor Today For Less Than a Dollar ~ IWELLO</title>
        <meta
          name="title"
          content="Talk To a Doctor Today
For Less Than a Dollar ~ IWELLO"
        />
        <meta
          name="description"
          content="Find trusted
medical personnel close to your location as fast 
as lighting for less than a dollar! "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iwello.org" />
        <meta
          property="og:title"
          content="Talk To a Doctor Today 
For Less Than a Dollar ~ IWELLO"
        />
        <meta
          property="og:description"
          content="Find trusted
medical personnel close to your location as fast 
as lighting for less than a dollar! "
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iwello.org" />
        <meta
          property="twitter:title"
          content="Talk To a Doctor Today/ 
For Less Than a Dollar ~ IWELLO"
        />
        <meta
          property="twitter:description"
          content="Find trusted medical personnel close to your location as fast 
as lighting for less than a dollar! "
        />
        <meta property="twitter:image" content="" />
      </Head>
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
