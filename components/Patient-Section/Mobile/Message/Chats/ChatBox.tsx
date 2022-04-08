import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";

const ChatBox = () => {
  return (
    <Box
      as="span"
      position="fixed"
      w="full"
      bottom={"0"}
      right="0"
      left="0"
      h="fit"
      py="6"
      bg="red"
    >
      <Box
        contentEditable={true}
        bg="yellow"
        rounded="50px"
        w="90%"
        mx="auto"
        minH={"12"}
      />
    </Box>
  );
};

export default ChatBox;
