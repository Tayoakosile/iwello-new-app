import React from "react";
import {
  Input,
  Text,
  HStack,
  Icon,
  Heading,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import AvailableDoctor from "./AvailableDoctor";

const Doctor = () => {
  return (
    <>
      <HStack spacing="6" pt="5" w="full">
        <Icon as={BsSearch} fontSize="24" />
        {/* <Input /> */}
        <Heading size="md">Search</Heading>
      </HStack>
      <SimpleGrid mt="21px" columns={[1, null, 2, 3]} spacingY='8' spacingX={'6'}>
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
        <AvailableDoctor />
      </SimpleGrid>
    </>
  );
};

export default Doctor;
