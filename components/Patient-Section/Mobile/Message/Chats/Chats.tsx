import { Box } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reduxstore";
import Chat from "./Chat";

const Chats = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  return (
    <Box h="full" w="full">
      {allChatMessages.map((chat, index) => (
        //r
        <Chat key={index} chat={chat} />
      ))}
    </Box>
  );
};

export default Chats;
