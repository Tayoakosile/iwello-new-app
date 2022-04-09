import React from "react";
import { Box, CloseButton, HStack, VStack } from "@chakra-ui/react";
import DoctorProfile from "./DoctorProfile";
import Chats from "./Chats/Chats";
import ChatBox from "./Chats/ChatBox";
import { useRef, useEffect } from "react";
import { RootState } from "../../../../stores/reduxstore";
import { useSelector } from "react-redux";

const Message = () => {
  const messagesEndRef = useRef(null) as any;
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  const scrollToBottom = () => {
    messagesEndRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [allChatMessages]);

  return (
    <>
      <Box
        position="relative"
        h="80vh"
        overflowY="scroll"
        w="full"
        bg="#F8F5F5"
        mt="20px"
        pt="46px"
        px="19px"
        id="container"
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
        <div ref={messagesEndRef} />
      </Box>
    </>
  );
};

export default Message;
