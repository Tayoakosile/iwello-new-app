import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import HeaderText from "../components/Home/HeaderText";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import FreeTrial from "../components/Home/FreeTrial";
import Head from "next/head";
import Suscribe from '../components/Home/Suscribe';

const index = () => {
  return (
    <Box as="main">
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
          content="Find trustedmedical personnel close to your location as fast 
as lighting for less than a dollar! "
        />
        <meta property="twitter:image" content="" />
      </Head>

      <HeaderText />
      <AboutUs />
      <Services />
      <Testimonials />
      <FreeTrial />
      <Suscribe />
    </Box>
  );
};

export default index;
