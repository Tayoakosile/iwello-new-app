import React from "react";
import { Box, CloseButton, Divider, HStack, VStack } from "@chakra-ui/react";
import DoctorProfile from "./DoctorProfile";
import Chats from "./Chats/Chats";
import ChatBox from "./Chats/ChatBox";
import { useRef, useEffect } from "react";
import { RootState } from "../../../../stores/reduxstore";
import { useSelector } from "react-redux";

const Message = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  return (
    <Box
      position="relative"
      h="100%"
      w="full"
      bg="#F8F5F5"
      mt="20px"
      pt="46px"
      px="19px"
      id="container"
    >
      <Box bg="red" h="90%" overflowY="scroll" pb="10%">
        {/* Close button */}
        <Box as="span" position={"absolute"} top="17px" right="17px" mb="14px">
          <CloseButton size="lg" />
          {/* Close button */}
        </Box>
        <DoctorProfile />
        {/* Patient/ Doctor's chat */}
        <Chats />
        <Box mt='32'/>
      </Box>
      <ChatBox />
    </Box>
  );
};

export default Message;
