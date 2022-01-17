import React from "react";
import { Input, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const Suscribe = () => {
  return (
    <VStack px="23px " as="section" align="flex-start" spacing="14px" py="60px">
      <Heading fontSize="16px">Subscribe to our newsletter</Heading>
      <Text fontSize="14px">
        Enter your email adress below to subscribe to our weekly newsletter to
        get the latest news about our services and other medical advances, you
        can unsubscribe at any time if you choose to.
      </Text>
      {/* Suscribe Input and button */}
      <HStack spacing="0">
        <Input
          size="lg"
          h="50px"
          placeholder="Enter your email address"
          flex="0.7"
          pl=""
          borderRadius="0px"
          _placeholder={{ fontSize: "14px", color: "#4E4C4C80" }}
        />
        <Button variant="outline" h="50px" flex="0.3" borderRadius="0px">
          Suscribe
        </Button>
      </HStack>
    </VStack>
  );
};

export default Suscribe;
