import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <VStack
      as="main"
      h="320px"
      bgRepeat="no-repeat"
      spacing="20px"
      bgSize="cover"
      w="100%"
      bgImage={"url('/img/homepage-image.png')"}
      textAlign={"center"}
      py="30px"
      px="20px"
      color="white"
    >
      <Heading>
        Talk To a{" "}
        <Text as="span" color="brand.500">
          {" "}
          Doctor
        </Text>{" "}
        Today For Less Than a <Text  as="span" color="brand.500">
          Dollar
        </Text>
      </Heading>
      <Text>
        Let’s help get you care from a licensed medical practitioner with less
        than a dollar at your convienence.
      </Text>

      <Button mt="20px" size="lg" w='80%' h='14' mx='auto' rounded="sm">
        <Link href="/login">Get Started</Link>
      </Button>
    </VStack>
  );
};

export default index;
