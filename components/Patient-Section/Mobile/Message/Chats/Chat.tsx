import React from "react";
import Image from "next/Image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { ChatsProp } from "../../../../../@types/types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reduxstore";

const Chat = ({ chat }: { chat: ChatsProp }) => {
  const { receiverId, text, senderId, croppedImage } = chat;
  const userId = "12345";
  const AnimateImage = motion(Box);
  const isSentByUser = userId === senderId;
  const chat = useSelector((state: RootState) => state.chat.value);

  return (
    <>
      <Box
        as="span"
        className={`message ${isSentByUser ? "sent" : "received"}`}
        rounded="10px"
        maxW={croppedImage ? "40% !important" : "85% !important"}
        w="fit-content !important"
        // bg={{ base: "#fff !important", lg: "#F5F5F5 !important" }}
        mb="8"
      >
        {croppedImage && (
          <Box as={Zoom} openText="Click to zoom">
            <Image
              src={croppedImage}
              // layout="fill"
              alt="Alt Image"
              width={400}
              objectFit="contain"
              height={300}
            />
          </Box>
        )}

        {croppedImage && (
          <>
            <br />
          </>
        )}

        <Text as="span" fontSize={croppedImage ? "xl" : "lg"}>
          {text}
        </Text>

        <span className="metadata">
          <Box
            as="span"
            className="time"
            color={` ${
              isSentByUser ? "#EEEDFE !important" : "#909090 !important"
            }`}
          >
            10:30pm
          </Box>
          <span className="tick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              id="msg-dblcheck-ack"
              x="2063"
              y="2076"
            >
              <path
                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                fill="#fff"
              />
            </svg>
          </span>
        </span>
      </Box>
    </>
  );
};

export default Chat;
