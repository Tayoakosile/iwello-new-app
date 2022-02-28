import React from "react";
import {
  Box,
  Avatar,
  HStack,
  VStack,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { BsTelephoneFill, BsFillChatLeftFill } from "react-icons/bs";
import DocAvailability from "../../../../reusables/DocAvailability";

const Doctor = ({ available }: { available: boolean }) => {
  return (
    <Box bg="#F8F5F5" w="full" h="32" p="15px">
      <DocAvailability available={available} />
      {/* DOctor's image and name */}
      <HStack as="span" pt="16px" justify="space-between">
        <HStack as="span">
          <Avatar alt="Doctor's Image" w="50px" h="50px" />
          <VStack as="span" align="flex-start" spacing="-2px">
            <Heading fontSize="15px">Doctor Adeola Sapara</Heading>
            <Text as="span" color="brand.500">
              General Physician
            </Text>
          </VStack>
        </HStack>
        <HStack as="span" spacing="8px">
          <IconButton
            _active={{ transform: "scale(0.9)" }}
            colorScheme={"white"}
            borderRadius="50% !important"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            aria-label="Call a Doctor"
            bg="#fff"
            color="brand.500"
          >
            <BsTelephoneFill />
          </IconButton>

          <IconButton
            _active={{ transform: "scale(0.9)" }}
            colorScheme={"white"}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="50% !important"
            aria-label="Chat Doctor"
            shadow="md"
            bg="#fff"
            color="#000000"
          >
            <BsFillChatLeftFill />
          </IconButton>
        </HStack>
      </HStack>
      {/* DOctor's image and name */}
    </Box>
  );
};

export default Doctor;
