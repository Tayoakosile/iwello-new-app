import React from "react";
import { Box, HStack, VStack, Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { storeMessage } from "../../../../../stores/chat";
import useChat from "../../../../hooks/useChat";
// storeMessage;

const ChatBox = () => {
  const dispatch = useDispatch();
  const { sendChat } = useChat();
  return (
    <HStack
      as="span"
      position="fixed"
      w="full"
      bottom={"0"}
      right="0"
      left="0"
      h="fit"
      py="6"
      px="4"
      justify={"space-between"}
      bg="#F8F5F5"
      sx={{
        "[data-placeholder]:empty:before": {
          content: "attr(data-placeholder)",
          color: "#888",
          fontStyle: "italic",
        },
      }}
    >
      <Box
        contentEditable={true}
        fontFamily={"Rubik"}
        placeholder="Type in a message"
        fontSize="14px"
        rounded="20px"
        w="80%"
        mx="auto"
        minH={"8"}
        p="4"
        bg="white"
        maxH="16"
        overflow="scroll"
        outline="none"
        border="0px solid transparent"
        onInput={(e) => {
          const userMessage = e.currentTarget.textContent as string;
          //   console.log(e.currentTarget.textContent);

          //   console.log(userMessage.trim().length);
          if (userMessage.trim().length >= 1) {
            dispatch(
              storeMessage({
                message: userMessage.trim(),
              })
            );
          }
          //   storeMessage;
        }}
      />

      <Icon as={BiSend} fontSize="32px" onClick={sendChat} />
    </HStack>
  );
};

export default ChatBox;
