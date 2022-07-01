import React from "react";
import produce from "immer";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { sendPatientChat } from "../../stores/chats";

import { RootState } from "../../stores/reduxstore";
import { ChatMessage } from "../../utils/util";
import { useState } from "react";
import { ChatsProp } from "../../@types/types";
import randomatic from "randomatic";

const useChat = () => {
  const [userChat, setUserChat] = useState([...ChatMessage]);
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chats.value);

  //   User chat message
  const chatMessage = useSelector((state: RootState) => state.chat.value);
  //   User chat message

  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  const sendChat = (): any => {
    const userInfoWithChatMessage: ChatsProp = {
      text: chatMessage.message,
      croppedImage: null,
      receiverId: randomatic("0a", 11),
      senderId: "12345",
    };
    const newArray = produce(allChatMessages, (draftState) => {
      // "mutate" the draft array
      draftState.push(userInfoWithChatMessage);
      // "mutate" the nested state
      //   draftState[1].done = true;
    });

    dispatch(sendPatientChat(newArray));
    console.log(newArray, "new");
  };
  return { sendChat, userChat };
};

export default useChat;
