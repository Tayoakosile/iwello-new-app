import React from "react";
import { Box, CloseButton, Divider, HStack, VStack } from "@chakra-ui/react";
import DoctorProfile from "./DoctorProfile";
import Chats from "./Chats/Chats";
import ChatBox from "./Chats/ChatBox";
import { useRef, useEffect } from "react";
import { RootState } from "../../../../stores/reduxstore";
import { useSelector } from "react-redux";
import DesktopChatBox from "./Chats/DesktopChatBox";

const Message = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  return (
    <Box
      position="relative"
      h={{ base: "90vh", lg: "75vh" }}
      w="full"
      // bg="red"
      bg={{ base: "#F8F5F5", lg: "#fff" }}
      mt="20px"
      pt="46px"
      px="19px"
      overflowY={{ base: "scroll", lg: "visible" }}
      id="container"
    >
      <>
        {/* Close button */}
        <Box
          as="span"
          position={"absolute"}
          top="17px"
          right="17px"
          mb="14px "
          d={{ base: "block", lg: "none" }}
        >
          <CloseButton size="lg" />
          {/* Close button */}
        </Box>
        <DoctorProfile />
        {/* Patient/ Doctor's chat */}
        <Chats />
        <Box mt="20" />
      </>
      <Box as="span">
        <ChatBox />
      </Box>
      {/* <Box as="span" d={{ base: "none", lg: "block" }}>
        <DesktopChatBox />
      </Box> */}
    </Box>
  );
};

export default Message;
