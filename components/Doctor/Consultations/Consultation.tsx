import React from "react";
import { BsTelephone, BsChatLeftFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import useConsultation from "../../hooks/useConsultation";
import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

const Consultation = () => {
  const { showConsultationPopUp } = useConsultation();
  return (
    <VStack
      onClick={showConsultationPopUp}
      bg="#F8F5F5"
      w="full"
      align="flex-start"
      py="6"
      px="4"
      mx="auto"
      fontFamily="rubik"
      h="10rem"
    >
      <HStack justify="space-between" as="span" w="full" spacing="2">
        <HStack as="span" align="flex-start">
          <Avatar name="Segun Odegbami" />
          <VStack as="span" align="flex-start" spacing="0">
            <Heading isTruncated size="sm" color="brand.900">
              Segun Odegbami
            </Heading>
            <Text isTruncated as="span" maxW="52" color="#414141">
              I have a slight headache I have a slight headache
            </Text>
            <Text color="red.500">Called now</Text>
          </VStack>
        </HStack>
        <Text alignSelf="flex-start">11:23pm</Text>
        {/* Time and Icons  */}
      </HStack>

      {/*  Icons  */}
      <HStack alignSelf="flex-end" as="span" spacing="4">
        <IconButton
          rounded="full"
          shadow="md"
          aria-label="voice-call"
          variant="ghost"
          size="lg"
          bg="white"
        >
          <IoCall />
        </IconButton>

        <IconButton
          size="lg"
          bg="white"
          variant="ghost"
          aria-label="chat"
          rounded="full"
          shadow="md"
        >
          <BsChatLeftFill />
        </IconButton>
      </HStack>
    </VStack>
  );
};

export default Consultation;
