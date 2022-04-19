import { useToast } from "@chakra-ui/react";

import produce from "immer";
import IsFileAImage from "is-image";
import randomatic from "randomatic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatsProp } from "../../@types/types";
import { handleImageUpload } from "../../helper/helper";
import { sendPatientChat } from "../../stores/chats";
import { RootState } from "../../stores/reduxstore";

const useUploadImage = (cropper: any) => {
  const allChatMessages = useSelector((state: RootState) => state.chats.value);
  const chat = useSelector((state: RootState) => state.chat.value.message);
  const toast = useToast();

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [cropImageDialog, setCropImageDialog] = useState(false);
  const [cropData, setCropData] = useState("#");

  const onChange = async (e: any) => {
    e.preventDefault();
    let files;

    // if(IsFileAImage)

    if (e.target.files && IsFileAImage(e.target.files[0].name)) {
      const compressedImage = await handleImageUpload(e);
      // IF image is fully compressed then open Image dialog
      if (compressedImage) {
        setCropImageDialog(true);
      }
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = compressedImage;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as any);
      };
      // @ts-ignore
      reader.readAsDataURL(compressedImage);
    } else {
      toast({
        title: "Image Valid",
        description: "Please post a valid image file",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  //   Sends message with image
  const getCropData = (message: string) => {
    if (typeof cropper !== "undefined" || null) {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const croppedData = cropper.getCroppedCanvas().toDataURL();

      const UserImageUpload: ChatsProp = {
        croppedImage: croppedData,
        text: message ? message : chat,
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
    }
    setCropImageDialog(false);
    setCropData("");
    setImage(null);
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
