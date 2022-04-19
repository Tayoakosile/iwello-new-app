import { Box, Heading, HStack } from "@chakra-ui/react";
// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";
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
      overflowX={"hidden"}
      sx={{
        ".received": {
          bg: toggleNavbar ? "#F5F5F5" : "#fff",
        },
      }}
    >
      <Box
        as={ScrollToBottom}
        w="full"
        h="full"
        className="iwello-scroll"
        justify="space-around"
      >
        {allChatMessages.map((chat, index) => (
          //r
          <Chat key={index} chat={chat} />
        ))}

        <Box as="span" className="message sent" opacity="0" />
        <Box
          as="span"
          className="message received"
          opacity="0"
          d={{ base: "none", lg: "block" }}
        />
        <Box
          as="span"
          className="message received"
          opacity="0"
          d={{ base: "none", lg: "block" }}
        />
      </Box>

      {/* <Chat key={index} chat={chat} /> */}
    </Box>
  );
};

export default Chats;
