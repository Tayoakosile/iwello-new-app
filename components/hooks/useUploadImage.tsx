import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPatientChat } from "../../stores/chats";
import { ChatsProp } from "../../@types/types";
import produce from "immer";
import randomatic from "randomatic";
import { RootState } from "../../stores/reduxstore";
import { handleImageUpload } from "../../helper/helper";

const useUploadImage = (cropper: any) => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  const dispatch = useDispatch();

  const [image, setImage] = useState();
  const [cropImageDialog, setCropImageDialog] = useState(false);
  const [cropData, setCropData] = useState("#");

  const onChange = async (e: any) => {
    setCropImageDialog(true);
    e.preventDefault();
    let files;

    const compressedImage = await handleImageUpload(e);
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(compressedImage);
  };

  //   Sends message with image
  const getCropData = (message: string) => {
    if (typeof cropper !== "undefined" || null) {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const croppedData = cropper.getCroppedCanvas().toDataURL();

      const UserImageUpload: ChatsProp = {
        croppedImage: croppedData,
        text: message ? message : null,
        receiverId: randomatic("0a", 11),
        senderId: "12345",
      };

      const newArray = produce(allChatMessages, (draftState) => {
        // "mutate" the draft array
        draftState.push(UserImageUpload);
        // "mutate" the nested state
        //   draftState[1].done = true;
      });
      //   Sends the image
      dispatch(sendPatientChat(newArray));
      setCropImageDialog(false);
      //   Sends the image
    }
  };

  const cancelCrop = () => setCropImageDialog(false);
  return {
    onChange,
    getCropData,
    image,
    cropData,
    cropImageDialog,
    cancelCrop,
  };
};

export default useUploadImage;
