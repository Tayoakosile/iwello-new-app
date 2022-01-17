import React from "react";
import Link from "next/Link";
import { Box, Button, VStack, Heading, Text } from "@chakra-ui/react";

const FreeTrial = () => {
  return (
    <VStack
      as="section"
      bgImage="url('/img/trial.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      color="#fff"
      h="320px"
      align="center"
      pt="56px"
      textAlign="center"
      spacing="25px"
    >
      <VStack as="span">
        <Text pb="3px" fontWeight="500">
          Not convinced yet?
        </Text>
        <Heading fontSize="24px">
          Get your first three <br />
          <Text as="span" color="brand.500">
            {" "}
            Consultations
          </Text>{" "}
          <br />
          for free
        </Heading>
      </VStack>
      <Link href="/signup">
        <Button px="20px" mx="auto" size="lg">
          Sign Up
        </Button>
      </Link>
    </VStack>
  );
};

export default FreeTrial;
