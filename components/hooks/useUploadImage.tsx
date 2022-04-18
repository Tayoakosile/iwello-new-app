import isImage from "is-image";
import produce from "immer";
import { useFileUpload, FileUpload } from "use-file-upload";
import { useState } from "react";
import { Crop, ReactCropProps } from "react-image-crop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/reduxstore";
import { sendPatientChat } from "../../stores/chats";
import { GiConsoleController } from "react-icons/gi";

const useUploadImage = () => {
  const [file, selectFile] = useFileUpload();
  const [cropImage, showCroppedImage] = useState(false);
  const [result, setResult] = useState();
  const getCroppedImg = async (crop: Crop, userFile: HTMLImageElement) => {
    const image = userFile.file;
    try {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg", 1);

      console.log(base64Image, "base64Image");
      setResult(base64Image);
      return base64Image;
    } catch (e) {
      console.log("crop the image", e);
    }
  };

  const dispatch = useDispatch();
  const allChatMessages = useSelector((state: RootState) => state.chats.value);

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

  const UploadImage = async (croppedImage: Crop) => {
    // console.log(croppedImage, "croppedImage");
    if (croppedImage) {
      //   const image = URL.createObjectURL(file);
      await getCroppedImg(croppedImage, file);
      await console.log(result, "result");
      console.log("touched");
    }
    console.log(croppedImage, file, "untouched");
    // const newArray = produce(allChatMessages, (draftState) => {
    //   // "mutate" the draft array
    //   const newImageArray = { croppedImage, type: "image" };
    //   draftState.push(newImageArray);
    //   // "mutate" the nested state
    //   //   draftState[1].done = true;
    // });

    // dispatch(sendPatientChat(newArray));

    // showCroppedImage(false);
  };
  return { startImageUpload, UploadImage, cropImage, file, cancelUpload };
};

export default useUploadImage;
