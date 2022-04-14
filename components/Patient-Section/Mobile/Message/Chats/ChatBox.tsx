import React from "react";
import { Box, HStack, VStack, Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { storeMessage } from "../../../../../stores/chat";
import useChat from "../../../../hooks/useChat";
import { motion } from "framer-motion";
import { useState } from "react";
// storeMessage;

const AnimateButton = motion(Box);
const AnimateChatBox = motion(Box);
const ChatBox = () => {
  const [showSendButton, setShowButton] = useState(false);
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
      align="flex-end"
    >
      <Box
        contentEditable={true}
        w="100%"
        bg="#fff"
        // w='100%'
        fontFamily={"Rubik"}
        placeholder="Type in a message"
        fontSize="14px"
        rounded="20px"
        mx="auto"
        minH={"8"}
        p="4"
        // bg="white"
        maxH="16"
        overflow="auto"
        outline="none"
        border="0px solid transparent"
        onInput={(e) => {
          const userMessage = e.currentTarget.textContent as string;
          //  Makes sure user types before message is sent

          //   Used to animate app
          userMessage.trim().length >= 1
            ? setShowButton(true)
            : setShowButton(false);

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

      <Box as="span">
        <Icon
          as={BiSend}
          fontSize="42px"
          onClick={() => {
            sendChat();
          }}
        />
      </Box>
    </HStack>
  );
};

export default ChatBox;
