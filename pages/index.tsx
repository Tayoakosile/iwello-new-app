import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import HeaderText from "../components/Home/HeaderText";
import AboutUs from '../components/Home/AboutUs';

const index = () => {
  return (
    <Box as="main">
      <HeaderText />
      <AboutUs />
    </Box>
  );
};

export default index;
