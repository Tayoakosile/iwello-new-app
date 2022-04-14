import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Message from "../../components/Patient-Section/Mobile/Message/Message";
import Header from "../../components/Patient-Section/Mobile/Message/Header";

const message = () => {
  return (
    <Box as="section" h="100%" w="full"  >
      <Header />
      <Message />
      {/* <Box mt="32"></Box> */}
    </Box>
  );
};

export default message;
