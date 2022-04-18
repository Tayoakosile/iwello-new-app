import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Icon,
  Image,
} from "@chakra-ui/react";
import React from "react";
import "style-file-input";

import { Button, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiPaperClip } from "react-icons/gi";
import ReactCrop, { Crop, ReactCropProps } from "react-image-crop";
import useUploadImage from "../../../../hooks/useUploadImage";

const Media = ({ showSendButton }: { showSendButton: boolean }) => {
  const AnimateChatBox = motion(Box);
  const [crop, setCrop] = useState<Crop>();
  const [croppedfile, setCroppedFile] = useState<Crop>();

  const { startImageUpload, UploadImage, cropImage, file, cancelUpload } =
    useUploadImage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <AnimateChatBox
        d="flex"
        whileTap={{ scale: showSendButton ? 0.7 : 1 }}
        whileHover={{ scale: 1.1 }}
        as="label"
        htmlFor="iwello-media"
        // bg="yellow"
        p="2"
        onClick={startImageUpload}
        position="relative"
      >
        <Icon as={GiPaperClip} />
        {/* <Input type="file" id="iwello-media" d="none" /> */}
      </AnimateChatBox>

      <AlertDialog
        isOpen={cropImage}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        size="4xl"
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              <ReactCrop
                crop={crop}
                onChange={(croppedImage: Crop) => {
                  setCrop(croppedImage);
                  setCroppedFile(croppedImage);
                  //   console.log(croppedImage, crop);
                }}
              >
                <Image
                  src={file?.source}
                  alt="image uploaded "
                  objectFit={"cover"}
                />
              </ReactCrop>
            </AlertDialogBody>
            <AlertDialogFooter w="full">
              <Button
                ref={cancelRef}
                // onClick={onClose}
                flex="0.5"
                onClick={cancelUpload}
              >
                Cancel
              </Button>

              <Button
                colorScheme="red"
                flex="0.5"
                size="lg"
                onClick={() => {
                  UploadImage(croppedfile);
                }}
              >
                Upload
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Media;
