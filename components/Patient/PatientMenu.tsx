import { Box, HStack, Icon, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import PatientLeftMenuAndProfile from "./Menu/PatientLeftMenuAndProfile";
import PatientMenuToTheRight from "./Menu/PatientMenuToTheRight";

const DoctorMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="white" h="5rem !important">
        <HStack justify="space-between" h="full">
          {/* Doctor's Avatar and name */}
          <PatientLeftMenuAndProfile />
          {/* Notification Icon */}
          <HStack
            pr="3"
            as="span"
            flex="0.3"
            justify="flex-end"
            spacing="23px"
            align="flex-start"
          >
            <Icon as={BsCart3} color="brand.900" strokeWidth={0} w="8" h="8" />
            <Icon
              as={IoIosNotificationsOutline}
              w="8"
              h="8"
              color="brand.900"
              strokeWidth={0}
            />
            {/* Opens Menu to the right */}
            <Box as="span" onClick={onOpen}>
              <Icon
                as={HiMenuAlt2}
                color="brand.900"
                strokeWidth={0}
                w="8"
                h="8"
              />
            </Box>
            {/*Menu */}
          </HStack>
        </HStack>

        {/* Patients Menu */}
        <PatientMenuToTheRight
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />

        {/* Menu items */}
      </Box>
    </>
  );
};

export default DoctorMenu;
