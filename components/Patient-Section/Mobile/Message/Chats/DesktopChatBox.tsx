import { Box, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { storeMessage } from "../../../../../stores/chat";
import useChat from "../../../../hooks/useChat";
import Media from "../Media/Media";

const DesktopChatBox = () => {
  const dispatch = useDispatch();
  const [showSendButton, setShowButton] = useState(false);
  const [patientMessage, setPatientMessage] = useState("yoo");
  const AnimateButton = motion(Box);
  const AnimateChatBox = motion(Box);
  const { sendChat } = useChat();

  return (
    <>
      <HStack
        as="section"
        position="absolute"
        bottom="-8"
        h="32"
        // bg="red"
        bg="#fff"
        right="0"
        overflowX="hidden"
        left="0"
        w="100%"
        spacing="32px"
        px="85px"
        sx={{
          "[contenteditable=true]:empty:before ": {
            content: " attr(placeholder)",
            pointerEvents: "none",
            display: "block" /* For Firefox */,
            color: "#909090",
            fontFamily: "inherit",
          },
          svg: {
            cursor: "pointer",
            w: "6",
            h: "6",
          },
        }}
      >
        <Media />
        <Box
          contentEditable={true}
          border="1px solid #909090"
          flex="2"
          w="100%"
          // shadow="sm"
          bg="#fff"
          overflowX={"hidden"}
          // w='100%'
          fontFamily={"Rubik"}
          placeholder="Type in a message..."
          fontSize="14px"
          rounded="50px"
          mx="auto"
          minH={"6"}
          // color="white"
          id="patientMessageBox"
          py="4"
          px="8"
          maxH="24"
          overflowY="hidden"
          outline="none"
          // border="0px solid transparent"
          // dangerouslySetInnerHTML={{ __html: patientMessage }}
          suppressContentEditableWarning={true}
          onInput={(e) => {
            const userMessage = e.currentTarget.textContent as string;

            //   Used to animate app
            userMessage.trim().length >= 1
              ? setShowButton(true)
              : setShowButton(false);

            if (userMessage.trim().length >= 1) {
              setPatientMessage(userMessage);
              dispatch(
                storeMessage({
                  message: userMessage.trim(),
                })
              );
            }
          }}
        />
        <AnimateChatBox
          d="flex"
          whileTap={{ scale: showSendButton ? 0.7 : 1 }}
          whileHover={{ scale: 1.1 }}
          as="span"
          // bg="yellow"
          p="4"
          animate={{
            opacity: showSendButton ? 1 : 0.1,
            cursor: showSendButton ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            // showSendButton
            if (showSendButton) {
              sendChat();
              setPatientMessage("");
              // userMessage.trim()("");
            }
          }}
        >
          <Icon as={BiSend} fontSize="36px" color="gray.700" />
        </AnimateChatBox>
      </HStack>
    </>
  );
};

export default DesktopChatBox;
