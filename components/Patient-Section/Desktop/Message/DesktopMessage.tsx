import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/reduxstore";
import Chat from "../../Mobile/Message/Chats/Chat";

const DesktopMessage = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  return (
    <>
      <Box as="section" h="80%" w="full" bg="red" ></Box>
    </>
  );
};

export default DesktopMessage;
