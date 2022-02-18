import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
const MenuToTheLeftAndDoctorProfile = () => {
  return (
    <HStack as="span" pl="3" flex="0.7" maxW="60">
      <Avatar name="Arinola Majekodunmi" size="sm" />
      <Text as="span" fontSize="15px" isTruncated fontWeight="bold">
        {" "}
        Dr. Arinola Majekodunmi Majekodunmi
      </Text>
    </HStack>
  );
};

export default MenuToTheLeftAndDoctorProfile;
