import {
    Avatar,
    chakra, Divider, Drawer, DrawerCloseButton,
    DrawerContent, Heading, HStack, Icon, Link, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import { MdEditNote } from "react-icons/md";

const PatientLeftMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack align="center" onClick={onOpen}>
        <Avatar
          src="/img/logo/logo-mobile.png"
          alt="Olanrewaju's profile Image"
          size="sm"
        />
        <Heading fontSize="15px">Olanrewaju</Heading>
      </HStack>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent mt="24px" w="80% !important" px="23px" h="70%">
          <DrawerCloseButton />

          {/* Patient Avatar's and Name */}
          <HStack pt="50px" align="center" spacing="18px">
            {/* Avatar of User */}
            <Avatar size="lg" />
            {/* Avatar of User */}

            <VStack spacing="2px !important" align="flex-start">
              <Heading fontSize="18px">Oredipe Olanrewaju</Heading>
              {/* Edit Profile */}
              <HStack fontSize="18px" align="center" color="#1877F2">
                <Icon as={MdEditNote} />
                <Text as="span" fontSize="14px">
                  edit profile
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Divider pt="25px" w="80%" mx="auto" color="#C4C4C4" size="md" />
          {/* Patient Avatar's and Name */}
          {/* User wallet balance */}

          <VStack align="flex-start" as="span" spacing="2px" pt="44px">
            <Text>Your wallet balance</Text>
            <Heading fontSize="24px">₦23, 902.20</Heading>
          </VStack>
          {/* User wallet balance */}

          {/* See history */}
          <Link pt="14px" textAlign="right" color="brand.500" fontWeight="500">
            see history
          </Link>
          {/* See history */}

          {/* Log out */}
          <chakra.button
            h="60px"
            p="20px"
            fontSize="18px"
            as="span"
            fontWeight="600"
            mt="37px"
            bg="#F5F5F5"
          >
            Logout
          </chakra.button>
          {/* Log out */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PatientLeftMenu;
