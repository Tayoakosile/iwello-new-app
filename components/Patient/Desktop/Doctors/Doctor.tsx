import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const Doctor = () => {
  return (
    <Flex
      w="full"
      h="fit"
      pb="32px"
      pt="20px"
      px="20px"
      bg="white"
      flexDir="column"
    >
      {/* Doctors'Availability */}
      <HStack justify="space-between">
        <HStack as="span">
          <Box as="span" w="10px" h="10px" bg="#11E90D" rounded="full" />
          <Text as="span" fontSize="14px">
            {" "}
            Available
          </Text>
        </HStack>
        <Icon as={BsThreeDots} fontSize="24px" />
      </HStack>
      {/* Doctors'Availability */}

      <HStack pt="33px">
        <Avatar size="lg" />
        <VStack spacing="0px" align="flex-start">
          <Heading lineHeight="21.09px" fontSize="16px" as="h4">
            Doctor Adeola Sapara
          </Heading>
          <Text as="span" color="brand.500" fontSize="16px">
            General Physician
          </Text>
        </VStack>
      </HStack>

      <Button w="40%" alignSelf="flex-end" mt="36px">
        Consult
      </Button>
    </Flex>
  );
};

export default Doctor;
