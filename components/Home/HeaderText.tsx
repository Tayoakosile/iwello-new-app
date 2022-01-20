import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HeaderText = () => {
  return (
    <>
      <VStack
        h={{ base: "350px", md: "400px" }}
        spacing="20px"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage={"url('/img/homepage-image.png')"}
        w="100%"
        textAlign={"center"}
        pt="61px"
        pb="30px"
        px="20px"
        as="section"
        color="white"
      >
        <Heading
          fontSize={{ base: "24px", md: "40px" }}
          w={{ base: "100%", md: "70%", lg: "100%" }}
        >
          Talk To a
          <Text as="span" color="brand.500">
            {""} Doctor
          </Text>
          {""} Today For Less Than a {""}
          <Text as="span" color="brand.500">
            Dollar
          </Text>
        </Heading>
        <Text
          w={{ base: "100%", md: "60%", lg: "100%" }}
          fontSize={{ md: "18px" }}
        >
          Let’s help get you care from a licensed medical practitioner with less
          than a dollar at your convienence.
        </Text>

        <Button
          mt="20px"
          size="lg"
          w={{ base: "80%", md: "50%" }}
          h={{ base: "14", md: "16" }}
          mx="auto"
          rounded="sm"
        >
        <Link href="/signup">Get Started</Link>
        </Button>
      </VStack>
    </>
  );
};

export default HeaderText;
