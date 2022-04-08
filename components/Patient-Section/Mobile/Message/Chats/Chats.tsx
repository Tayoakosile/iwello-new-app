import { Box } from "@chakra-ui/react";
import { ChatMessage } from "../../../../../utils/util";
import Chat from "./Chat";

const Chats = () => {
  return (
    <Box as="section">
      {[ChatMessage.map((chat) => <Chat key={chat.text} chat={chat} />)]}
    </Box>
  );
};

export default Chats;
