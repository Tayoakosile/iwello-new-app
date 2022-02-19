import {
  Avatar,
  Drawer,
  DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Heading, HStack, Icon, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import DoctorStatus from "../DoctorStatus";
import WalletBalance from "../WalletBalance";
const MenuToTheLeftAndDoctorProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <HStack fontFamily='Rubik' onClick={onOpen} as="span" pl="3" flex="0.7" maxW="60">
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
          w="80% !important"
          pt="6"
        >
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
            boxShadow="none"
            size={"lg"}
          />
          <DrawerBody h="full" px="2" my="8" w="full">
            <HStack w="full" align="flex-start" spacing="4">
              <Avatar size="lg" name="Arinola Majekodunmi" />
              <VStack
                align="flex-start"
                fontFamily="Rubik"
                as="span"
                spacing="0"
                w="full"
              >
                {/* DOctor's Name */}
                <Heading fontSize="16px" isTruncated w="85%">
                  Dr. Arinola Majekodunmi
                </Heading>
                {/* Doctors Profession */}
                <Text as="span" fontSize="12px">
                  Ob/Gyn at Hope City Hospital
                </Text>
                <Text fontSize="10px" as="span">
                  MBBS/Msc/Bsc
                </Text>

                {/* Edit profile here */}
                <HStack pt="5px" as="span" spacing="2" color="brand.500">
                  <Icon
                    opacity="0.7"
                    w="6"
                    h="6"
                    color="inherit"
                    as={MdOutlineEditNote}
                  />
                  <Text as="span" fontSize="12px">
                    edit profile
                  </Text>
                </HStack>
                {/* Doctor's Status */}

                {/* Doctor's Status */}
              </VStack>
            </HStack>
            <DoctorStatus />
            <WalletBalance />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuToTheLeftAndDoctorProfile;
