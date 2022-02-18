import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  DrawerOverlay,
  HStack,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
const MenuToTheLeftAndDoctorProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HStack onClick={onOpen} as="span" pl="3" flex="0.7" maxW="60">
        <Avatar name="Arinola Majekodunmi" size="sm" />
        <Text as="span" fontSize="15px" isTruncated fontWeight="bold">
          {" "}
          Dr. Arinola Majekodunmi Majekodunmi
        </Text>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="white"
          rounded="sm"
          mt="10"
          h="70vh"
          w="75% !important"
          pt='6'
        >
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
            boxShadow="none"
            size={'lg'}
          />
          <DrawerBody h="full" pt='32' bg="red" my="8"></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuToTheLeftAndDoctorProfile;
