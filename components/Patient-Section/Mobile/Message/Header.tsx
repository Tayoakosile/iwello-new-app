import React from "react";
import { Box, Icon, Heading, HStack, VStack } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <HStack
        as="section"
        justify="space-between"
        w="90%"
        mx="auto"
        d={{ base: "flex", lg: "none" }}
      >
        <Heading fontSize={{ base: "18px", lg: "30px" }}>Message</Heading>
        <Icon as={FiSearch} w="19px" h="19px" />
      </HStack>
    </>
  );
};

export default Header;
