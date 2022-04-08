import React from "react";
import { Box, CloseButton, HStack, VStack } from "@chakra-ui/react";
import DoctorProfile from "./DoctorProfile";
import Chats from "./Chats/Chats";
import ChatBox from "./Chats/ChatBox";

const Message = () => {
  return (
    <>
      <Box
        position="relative"
        h="full"
        w="full"
        bg="#F8F5F5"
        mt="20px"
        pt="46px"
        px="29px"
        position={"relative"}
      >
        {/* Close button */}
        <Box as="span" position={"absolute"} top="17px" right="17px" mb="14px">
          <CloseButton size="lg" />
          {/* Close button */}
        </Box>
        <DoctorProfile />
        {/* Patient/ Doctor's chat */}
        <Chats />
        {/* Patient/ Doctor's chat */}
        <ChatBox />
      </Box>
    </>
  );
};

export default Message;
