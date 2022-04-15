import React from "react";
import ReactHeadRoom from "react-headroom";
import { Box, HStack, VStack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/reduxstore";
import Chat from "../../Mobile/Message/Chats/Chat";
import DoctorProfile from "../../Mobile/Message/DoctorProfile";
import Chats from "../../Mobile/Message/Chats/Chats";
import DesktopChatBox from "../../Mobile/Message/Chats/DesktopChatBox";

const DesktopMessage = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);
  return (
    <Box
      className="iwello__desktopMessage"
      as="section"
      h="100%"
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
      <Box w="full" h="80%" overflowY={"scroll"} overflowX="hidden">
        <Chats />
      </Box>
      <DesktopChatBox />
    </Box>
  );
};

export default DesktopMessage;
