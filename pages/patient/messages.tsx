import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Message from "../../components/Patient-Section/Mobile/Message/Message";
import Header from "../../components/Patient-Section/Mobile/Message/Header";
import PatientIcon from "../../reusables/PatientIcons";
import "../../styles/Patient.module.css";

const message = () => {
  return (
    <Box as="section" h="100%" minHeight={"100%"} w="full">
      <Box as="span" d={{ base: "none", lg: "block" }}>
        <PatientIcon text={"Messages"} placeholderText="Search Messages" />
      </Box>

      <Header />

      <Box as="span" d={{ base: "block", lg: "none" }}>
        <Message />
      </Box>
      
      <Box as="span" d={{ base: "block", lg: "none" }}>
        <Message />
      </Box>

    </Box>
  );
};

export default message;
