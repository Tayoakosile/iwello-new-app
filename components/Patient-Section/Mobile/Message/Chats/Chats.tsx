import { Box, Heading } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reduxstore";
import Chat from "./Chat";
import UseMeasureMediaQuery from "../../../../hooks/UseMeasureMediaQuery";

const Chats = () => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);
  const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <Box
      h="full"
      w="full"
      sx={{
        ".received": {
          bg: toggleNavbar ? "#F5F5F5" : "#fff",
        },
      }}
    >
      {allChatMessages.map((chat, index) => (
        //r
        <Chat key={index} chat={chat} />
      ))}

      <Box as="span" className="message sent" opacity="0"/>
      <Box as="span" className="message sent" opacity="0"/>

      {/* <Chat key={index} chat={chat} /> */}
    </Box>
  );
};

export default Chats;
