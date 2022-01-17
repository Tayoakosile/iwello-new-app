import React from "react";
import { Box, Heading,Text, VStack } from "@chakra-ui/react";

const Suscribe = () => {
  return (
    <VStack align="flex-start" spacing="14px" pt="60px">
      <Heading>Subscribe to our newsletter</Heading>
      <Text>
        Enter your email adress below to subscribe to our weekly newsletter to
        get the latest news about our services and other medical advances, you
        can unsubscribe at any time if you choose to.
      </Text>
    </VStack>
  );
};

export default Suscribe;
