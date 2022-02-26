import { Button, Heading, Text, VStack, HStack } from "@chakra-ui/react";
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
        fontFamily={"Rubik"}
      >
        <Heading
          fontSize={{ base: "24px", md: "40px" }}
          w={{ base: "80%", md: "70%", lg: "100%" }}
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
          w={{ base: "90%", md: "60%", lg: "100%" }}
          fontSize={{ base: "14px", md: "18px" }}
        >
          Let’s help get you care from a licensed medical practitioner with less
          than a dollar at your convienence.
        </Text>

        <HStack spacing="12px" pt="10px" w="full">
          {/* Sign up Button  Here */}

          
          <Link passHref href="/signup">
            <Button
              size="lg"
              w={{ base: "80%", md: "50%" }}
              h={{ base: "14", md: "16" }}
              mx="auto"
              rounded="sm"
            >
              Get Started
            </Button>
          </Link>
          {/* Sign up Button  Here */}

          {/* Login Button  Here */}
          <Link passHref href="/login">
            <Button
              variant="outline"
              size="lg"
              w={{ base: "80%", md: "50%" }}
              h={{ base: "14", md: "16" }}
              mx="auto"
              color="white"
              rounded="sm"
              borderColor="brand.500"
              bg="whiteAlpha.200"
            >
              Login
            </Button>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export default HeaderText;
