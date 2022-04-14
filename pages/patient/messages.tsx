import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Message from "../../components/Patient-Section/Mobile/Message/Message";
import Header from "../../components/Patient-Section/Mobile/Message/Header";
import PatientIcon from "../../reusables/PatientIcons";
// import   "../../styles/Patient.css";
import DesktopMessage from "../../components/Patient-Section/Desktop/Message/DesktopMessage";
import UseMeasureMediaQuery from "../../components/hooks/UseMeasureMediaQuery";

const message = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <Box as="section" h="100%" minHeight={"100%"} w="full">
      <Box as="span" d={{ base: "none", lg: "block" }}>
        <PatientIcon text={"Messages"} placeholderText="Search Messages" />
      </Box>
      <Header />
      {toggleNavbar ? <DesktopMessage /> : <Message />}
      {/* Divider */}
      <Box h="4" />
      {/* <Box as="span" d={{ base: "block", lg: "none" }}></Box> */}
      {/* <Box as="span" d={{ base: "none", lg: "block" }}></Box> */}
    </Box>
  );
};

export default message;
