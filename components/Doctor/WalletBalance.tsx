import React from "react";
import { IconLogout } from "@tabler/icons";
import {
  Box,
  VStack,
  Text,
  Heading,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";

const WalletBalance = () => {
  return (
    <VStack spacing="24px" pt="24px" align="flex-start" pl="14px">
      <VStack as="span">
        <Text as="span" fontSize="15px" color="#4A4A4A">
          Your wallet balance
        </Text>
        <Heading as="span" fontSize="24px">
          ₦23,902.20
        </Heading>
      </VStack>

      <Button
        variant="link"
        as="span"
        fontSize="14px"
        alignSelf="flex-end"
        pr="8"
      >
        see history
      </Button>
      <HStack spacing="4" bg="#F5F5F5" p="4" h="16" w="full">
        <Icon
          w="7"
          h="7"
          strokeWidth={1}
          transform="rotate(180deg)"
          as={IconLogout}
        />
        <Text as="span" fontSize="18px">
          Logout
        </Text>
      </HStack>
    </VStack>
  );
};

export default WalletBalance;
