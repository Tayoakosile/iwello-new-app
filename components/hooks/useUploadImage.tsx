import isImage from "is-image";
import produce from "immer";
import { useFileUpload } from "use-file-upload";
import { useState } from "react";
import { Crop } from "react-image-crop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reduxstore";
import { sendPatientChat } from "../../stores/chats";

const useUploadImage = () => {
  const dispatch = useDispatch();
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

  const [file, selectFile] = useFileUpload();
  const [cropImage, showCroppedImage] = useState(false);

  const startImageUpload = () => {
    selectFile({ accept: "image/*", multiple: false }, (file: any) => {
      console.log(file, isImage(file.name));
      if (isImage(file.name) === true) {
        showCroppedImage(true);
      }
    });
  };
//   console.log(file);
  const cancelUpload = () => showCroppedImage(false);
  //   Upload new user image

  const UploadImage = (croppedImage: Crop) => {
    console.log(croppedImage, "croppedImage");
    const newArray = produce(allChatMessages, (draftState) => {
      // "mutate" the draft array
      const newImageArray = { croppedImage, type: "image" };
      draftState.push(newImageArray);
      // "mutate" the nested state
      //   draftState[1].done = true;
    });

    dispatch(sendPatientChat(newArray));

    showCroppedImage(false);
    console.log(newArray);
  };
  return { startImageUpload, UploadImage, cropImage, file, cancelUpload };
};

export default useUploadImage;
