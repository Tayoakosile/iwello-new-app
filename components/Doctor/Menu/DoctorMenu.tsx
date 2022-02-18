import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ReactHeadRoom from "react-headroom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import MenuToTheRight from "./MenuToTheRight";
import MenuToTheLeftAndDoctorProfile from "./MenuToTheLeftAndDoctorProfile";

const DoctorMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box as={ReactHeadRoom}>
        <HStack justify="space-between" h="full">
          {/* Doctor's Avatar and name */}
          <MenuToTheLeftAndDoctorProfile />
          {/* Notification Icon */}
          <HStack pr="3" as="span" flex="0.3" spacing="5" justify="flex-end">
            <Icon as={IoIosNotificationsOutline} w="8" h="8" />

            {/* Opens Menu to the right */}
            <Box as="span" onClick={onOpen}>
              <Icon as={HiMenuAlt2} w="8" h="8" />
            </Box>
            {/*Menu */}
          </HStack>
        </HStack>

        {/* Doctors Menu */}
        <MenuToTheRight isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        {/* Menu items */}
      </Box>
    </>
  );
};

export default DoctorMenu;
