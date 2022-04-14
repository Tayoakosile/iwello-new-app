import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const DocAvailability = ({ available }: { available?: boolean }) => {
  return (
    <HStack as="span" justify="space-between">
      <HStack as="span">
        <Box
          as="span"
          w="10px"
          h="10px"
          bg={available ? "#11E90D" : "red"}
          rounded="full"
        />
        <Text as="span" fontSize="14px">
          {" "}
          {available ? "Available" : "Not Available"}
        </Text>
      </HStack>
      <Icon as={BsThreeDots} fontSize="24px" color="gray.500" />
    </HStack>
  );
};

export default DocAvailability;