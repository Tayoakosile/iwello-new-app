import { Avatar, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const History = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justify={{ base: "stretch", md: "space-between" }}
      as="span"
      bg={{ base: "#F8F5F5", md: "#FFFFFF" }}
      w="full"
      p="15px"
      align="flex-start"
      borderRadius={"5px"}
    >
      <HStack fontFamily={"Rubik"} align="center">
        <Avatar
          w={{ base: "50px", md: "80px" }}
          h={{ base: "50px", md: "80px" }}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}
        />
        <VStack align="flex-start" spacing="0px !important">
          <Heading fontSize={{ base: "15px", md: "18px" }}>
            Dr. Arinola Majekodunmi
          </Heading>
          <Text
            fontSize={{ base: "12px", md: "16px" }}
            color={{ base: "#4E4C4C", md: "#909090" }}
          >
            A checkup was recommended.
          </Text>
        </VStack>
      </HStack>
      <Text
        as="span"
        alignSelf={{ base: "flex-end", md: "flex-start" }}
        fontSize={{ base: "10px", md: "12px" }}
        color="brand.500"
      >
        2:20pm, 10th Dec 2021
      </Text>
    </Stack>
  );
};

export default History;
