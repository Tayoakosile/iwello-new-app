import {
  Box,
  HStack,
  Icon,
  Text,
  Avatar,
  VStack,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots, BsTelephone, BsChatLeftFill } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

const AvailableDoctor = () => {
  return (
    <Flex
      flexDirection="column"
      w="full"
      h={["40", null, "40", "48"]}
      bg="#F8F5F5"
      py={["16px", null, "20px", "32px"]}
      px={["16px", null, "20px", "24px"]}
    >
      <HStack as="span" justify={"space-between"} pb="12px">
        {/* Doctor's availability here */}
        <HStack spacing="8px" as="span" align="center">
          <Box w="10px" h="10px" bg="#11E90D" rounded="full" />
          <Text as="span" fontSize="10px" fontFamily={"Roboto"}>
            {" "}
            Available
          </Text>
        </HStack>
        {/* Doctor's availability here */}
        <Icon as={BsThreeDots} />
      </HStack>

      {/* Doctors name and profile */}
      <HStack as="span" spacing="8px">
        <Avatar name="Doctor Adeola Sapara" />
        <VStack as="span" spacing="0" align="flex-start">
          <Heading as="h3" size="sm">
            Doctor Adeola Sapara
          </Heading>
          <Text as="span" color="brand.500" fontSize="12px">
            General Physician
          </Text>
        </VStack>
      </HStack>
      <HStack d={{ base: "flex", md: "none" }} alignSelf={"flex-end"}>
        <IconButton aria-label="Telephone" bg="white">
          <BsTelephone />
        </IconButton>
        <IconButton aria-label="Chat " variant="outline">
          <BsChatLeftFill />
        </IconButton>
      </HStack>
      <Button
        d={{ base: "none", md: "block" }}
        w="30%"
        h="14"
        alignSelf={"flex-end"}
      >
        Consult
      </Button>

      {/* Doctors name and profile */}
    </Flex>
  );
};

export default AvailableDoctor;
