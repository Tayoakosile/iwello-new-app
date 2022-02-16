import {
  Box,
  VStack,
  Heading,
  Icon,
  HStack,
  Avatar,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

const DoctorDashboard = () => {
  return (
    <VStack
      as="section"
      align="stretch"
      w="full"
      justify="stretch"
      spacing="43px"
      mt="10"
      fontFamily="rubik"
    >
      {/* Doctor's Avatar,Name and Icon */}
      <HStack justify="space-between" >
        {/* Doctor's Avatar and name */}
        <HStack as="span" pl="3" flex="0.7" maxW="60">
          <Avatar name="Arinola Majekodunmi" size="sm" />
          <Text as="span" fontSize="15px" isTruncated fontWeight="bold">
            {" "}
            Dr. Arinola Majekodunmi Majekodunmi
          </Text>
        </HStack>

        {/* Notification Icon */}
        <HStack as="span"  flex="0.3" spacing="5" justify="flex-end">
          <Icon as={IoIosNotificationsOutline} w="8" h="8" />
          <Icon as={HiMenuAlt2} w="8" h="8" />
          {/*Menu */}
          <Box></Box>
        </HStack>
      </HStack>
      {/* Consultation */}
      <HStack justify="space-between" px="6">
        <Heading size="md" fontSize="18px">
          Consultations
        </Heading>
        <Icon as={BsSearch} w="6" h="6" />
      </HStack>
    </VStack>
  );
};

export default DoctorDashboard;
