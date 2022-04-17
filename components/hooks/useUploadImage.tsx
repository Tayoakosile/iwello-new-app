import isImage from "is-image";
import { useFileUpload } from "use-file-upload";
import { useState } from "react";
import { Crop } from "react-image-crop";

const useUploadImage = () => {
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
  console.log(file);
  const cancelUpload = () => showCroppedImage(false);
  const UploadImage = (croppedImage: Crop) => {
    console.log(croppedImage, "croppedImage");
  };
  return { startImageUpload, UploadImage, cropImage, file, cancelUpload };
};

export default useUploadImage;
