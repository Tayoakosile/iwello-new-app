import {
  Avatar,
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Button,
  DrawerContent,
  DrawerCloseButton,
  Box,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactHeadRoom from "react-headroom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import List from "./List";
import { VStack } from "@chakra-ui/react";
import { DoctorMenuItems } from "../../../config/config";

const DoctorMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box as={ReactHeadRoom}>
      <HStack justify="space-between" h="full">
        {/* Doctor's Avatar and name */}
        <HStack as="span" pl="3" flex="0.7" maxW="60">
          <Avatar name="Arinola Majekodunmi" size="sm" />
          <Text as="span" fontSize="15px" isTruncated fontWeight="bold">
            {" "}
            Dr. Arinola Majekodunmi Majekodunmi
          </Text>
        </HStack>

        {/* Notification Icon */}
        <HStack as="span" flex="0.3" spacing="5" justify="flex-end">
          <Icon as={IoIosNotificationsOutline} w="8" h="8" />
          <Box as="span" onClick={onOpen}>
            <Icon as={HiMenuAlt2} w="8" h="8" />
          </Box>
          {/*Menu */}
          <Box></Box>
        </HStack>
      </HStack>

      {/* Menu items */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent bg="white" mt="10" h="70vh" w="70% !important">
          <DrawerBody mt="10">
            <VStack spacing="20px">
              {DoctorMenuItems.map((items) => (
                <React.Fragment key={items.link}>
                  <List svg={items.svg} link={items.link} />
                </React.Fragment>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Menu items */}
    </Box>
  );
};

export default DoctorMenu;
