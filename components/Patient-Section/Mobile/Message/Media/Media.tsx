import "cropperjs/dist/cropper.css";
import React, { useState } from "react";
import Cropper from "react-cropper";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";
import { GiPaperClip } from "react-icons/gi";
import useUploadImage from "../../../../hooks/useUploadImage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/reduxstore";

export const Media: React.FC = () => {
  //   const [] = useState();
  const chat = useSelector((state: RootState) => state.chat);
  const [cropper, setCropper] = useState<any>();
  const [message, setMessage] = useState("");
  const AnimateChatBox = motion(Box);
  const {
    getCropData,
    cancelCrop,
    cropData,
    onChange,
    image,
    cropImageDialog,
  } = useUploadImage(cropper);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Used to upload file */}
      <Box as="label" htmlFor="iwello-media-upload" w="full">
        <Icon as={GiPaperClip} w="8" h="8" />
        <Input
          type="file"
          multiple={false}
          
          onChange={onChange}
          d="none"
          id="iwello-media-upload"
        />
      </Box>
      {/* Used to upload file */}

      <AlertDialog
        isOpen={cropImageDialog}
        // leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        size="3xl"
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>
              <Box>
                <Box
                  as={Cropper}
                  //   style={{ height: 400, width: "100%" }}
                  zoomTo={0.1}
                  src={image}
                  viewMode={1}
                  minCropBoxHeight={50}
                  minCropBoxWidth={50}
                  responsive={true}
                  autoCropArea={0}
                  checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                  onInitialized={(instance) => {
                    setCropper(instance);
                  }}
                  guides={false}
                />
              </Box>
              <></>
            </AlertDialogBody>
            <AlertDialogFooter>
              {/* <Button size="lg" onClick={cancelCrop} flex="0.5">
                Cancel
              </Button> */}
              {/* <Button
                size="lg"
                ml="3"
                onClick={getCropData}
                flex="0.5"
                bg="red"
              >
                Crop
              </Button> */}
              <Box
                contentEditable={true}
                flex="2"
                w="100%"
                // bg="#fff"
                // w='100%'
                value={chat}
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
                border="1px solid transparent"
                bg="red"
                onInput={(e) => {
                  const userMessage = e.currentTarget.textContent as string;
                  setMessage(userMessage.trim());
                }}
              />

              {/* Send chat with image */}
              <AnimateChatBox
                d="flex"
                whileTap={{ scale: 0.7 }}
                whileHover={{ scale: 1.1 }}
                as="span"
                p="2"
                onClick={() => getCropData(message)}
              >
                <Icon as={BiSend} fontSize="36px" color="gray.700" />
              </AnimateChatBox>
              {/* Send chat with image */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default Media;
