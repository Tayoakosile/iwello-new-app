import React from "react";
import { BsSearch } from "react-icons/bs";
import { HStack, Icon, Heading, VStack } from "@chakra-ui/react";
import Histories from "./History/Histories";

const PatientHistory = () => {
  return (
    <>
      <HStack
        as="span"
        justify={"space-between"}
        px="4"
        mb="16px"
        d={{ base: "flex", md: "none" }}
      >
        <Heading fontSize="18px">History</Heading>
        <Icon as={BsSearch} w="19px" h="19px" />
      </HStack>
      <Histories />
    </>
  );
};

export default PatientHistory;
