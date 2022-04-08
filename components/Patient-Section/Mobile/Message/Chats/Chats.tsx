import { Box } from "@chakra-ui/react";
import { ChatMessage } from "../../../../../utils/util";
import Chat from "./Chat";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reduxstore";
import useChat from "../../../../hooks/useChat";

const Chats = () => {
  const { userChat } = useChat();
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  console.log(allChatMessages);
  return (
    <Box as="section" >
      {allChatMessages.map((chat, index) => (
        //   r
        <Chat key={index} chat={chat} />
      ))}
      {/* <Box mb="32"></Box> */}
    </Box>
  );
};

export default Chats;
