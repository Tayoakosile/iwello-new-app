import React from "react";
import { Box, Icon, Heading, HStack, VStack } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <HStack as="section" pt="46px" justify="space-between" w="90%" mx="auto">
        <Heading fontSize="18px">Chat</Heading>
        <Icon as={FiSearch} w="19px" h="19px" />
      </HStack>
    </>
  );
};

export default Header;
