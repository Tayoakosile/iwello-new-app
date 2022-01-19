import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HeaderText = () => {
  return (
    <>
      <VStack
        h="350px"
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
        <Heading>
          Talk To a
          <Text as="span" color="brand.500">
            {""} Doctor
          </Text>
          {""} Today For Less Than a {""}
          <Text as="span" color="brand.500">
            Dollar
          </Text>
        </Heading>
        <Text>
          Let’s help get you care from a licensed medical practitioner with less
          than a dollar at your convienence.
        </Text>

        <Button mt="20px" size="lg" w="80%" h="14" mx="auto" rounded="sm">
          <Link href="/login">Get Started</Link>
        </Button>
      </VStack>
    </>
  );
};

export default HeaderText;
