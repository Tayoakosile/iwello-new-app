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
import { useRef } from "react";

export const Media: React.FC = () => {
  //   const [] = useState();
  const chat = useSelector((state: RootState) => state.chat.value.message);
  const [cropper, setCropper] = useState<any>();
  const [message, setMessage] = useState("");
  const AnimateChatBox = motion(Box);
  const cancelRef = useRef<HTMLButtonElement>(null);
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
        <Icon
          as={GiPaperClip}
          width={{ base: "5", lg: "8" }}
          height={{ base: "5", lg: "8" }}
        />
        <Input
          type="file"
          multiple={false}
          onChange={onChange}
          d="none"
          accept="image/*"
          id="iwello-media-upload"
        />
      </Box>
      {/* Used to upload file */}

      <AlertDialog
        isOpen={cropImageDialog}
        leastDestructiveRef={cancelRef}
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
                  zoomTo={0.2}
                  src={image}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                  onInitialized={(instance) => {
                    setCropper(instance);
                  }}
                  guides={false}
                />
              </Box>
              <></>
            </AlertDialogBody>
            <AlertDialogFooter
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
              <Box
                contentEditable={true}
                flex="2"
                w="100%"
                // bg="#fff"
                // w='100%'
                dangerouslySetInnerHTML={{ __html: chat }}
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
