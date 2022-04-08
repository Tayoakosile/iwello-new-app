import React from "react";
import { Box, HStack, VStack, Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

const ChatBox = () => {
  return (
    <HStack
      as="span"
      position="fixed"
      w="full"
      bottom={"0"}
      right="0"
      left="0"
      h="fit"
      py="6"
      px="4"
      justify={'space-between'}
    >
      <Box
        contentEditable={true}
        bg="white"
        fontFamily={"Rubik"}
        fontSize="14px"
        rounded="20px"
        w="70%"
        mx="auto"
        minH={"12"}
        p="4"
        maxH="32"
        overflow="scroll"
        outline="none"
        border="0px solid transparent"
      />

      <Icon as={BiSend} fontSize="32px" />
    </HStack>
  );
};

export default ChatBox;
