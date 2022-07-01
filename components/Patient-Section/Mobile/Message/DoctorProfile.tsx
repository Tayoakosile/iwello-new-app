import React from "react";
import {
  Box,
  Avatar,
  HStack,
  VStack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

const DoctorProfile = () => {
  return (
    <>
      <HStack as="span" spacing="16px">
        <Avatar size="lg" w="60px" h="60px" />
        <VStack align={"flex-start"} spacing="0px">
          <Heading fontSize="15px">Segun Odegbami</Heading>
          <Text as="span" fontSize="12px" color="#909090">
            Male / 23yr/ 90kg
          </Text>
          <Text as="span" fontSize="10px" color="#E72A2A">
            Pre-existing condtions: Diabetes / HBP
          </Text>
        </VStack>
      </HStack>
      <Divider color="red" mt="24px" bg="#C4C4C4" />
    </>
  );
};

export default DoctorProfile;
