import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallDoctor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box as="section" bg="red" w="10px">
      {/* <Button onClick={onOpen}>Discard</Button> */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={true}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent
          w="85%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15) !important"
          borderRadius="10px !important"
        >
          <VStack py="40px" spacing="40px">
            <VStack as="span" spacing="0px">
              <Text as="span" fontSize="18px" color="#909090">
                Calling
              </Text>
              <Heading fontSize="24px" color="brand.900">
                Doctor Adeola Sapara
              </Heading>
              <Text as="span" color="brand.500">
                General Physician
              </Text>
            </VStack>
            <Avatar size="2xl" src="/img/avatar.png" w="150px" h="150px" />
            {/* Call Icon */}
            <IconButton
              aria-label="Calling Doctor"
              rounded="50% !important"
              colorScheme={"red"}
              w="50px"
              h="50px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25) !important"
            >
              <FaPhoneAlt />
            </IconButton>
            {/* Call Icon */}
          </VStack>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default CallDoctor;
