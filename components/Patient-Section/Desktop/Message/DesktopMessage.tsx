import React from "react";
import ReactHeadRoom from "react-headroom";
import { Box, HStack, VStack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { RootState } from "../../../../stores/reduxstore";
import Chat from "../../Mobile/Message/Chats/Chat";
import DoctorProfile from "../../Mobile/Message/DoctorProfile";
import Chats from "../../Mobile/Message/Chats/Chats";
import DesktopChatBox from "../../Mobile/Message/Chats/DesktopChatBox";

// const AlwaysScrollToBottom = () => {
//   const chats = useSelector((state: RootState) => state.chats.value);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//   elementRef.current.scrollIntoView();[]
//   }, [chats]);
// return <div ref={elementRef} />;
// };

const DesktopMessage = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);
  return (
    <Box
      className="iwello__desktopMessage"
      as="section"
      h="600px"
      w="full"
      bg="#fff"
      px="6"
      pt="6"
      pb="10"
      // overflowY="auto"
      // border="1px solid red"
      position="relative"
    >
      <DoctorProfile />
      <Box w="full" h="90%" overflowY={"auto"} overflowX="hidden" >
        <Chats />
      </Box>

      <DesktopChatBox />
    </Box>
  );
};

export default DesktopMessage;