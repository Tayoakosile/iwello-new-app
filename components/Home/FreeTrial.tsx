import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const FreeTrial = () => {
  return (
    <VStack
      as="section"
      bgImage="linear-gradient(251.38deg, rgba(0, 0, 0, 0.5) 20.16%, rgba(0, 0, 0, 0.5) 44.35%, rgba(0, 0, 0, 0) 93.06%),url('/img/trial.png')"
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
        <Button fontSize="14px" w="60%" h='14' px="20px" mx="auto" size="lg">
          Sign Up
        </Button>
      </Link>
    </VStack>
  );
};

export default FreeTrial;
