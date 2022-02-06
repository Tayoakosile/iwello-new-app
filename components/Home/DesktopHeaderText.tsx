import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Button, Text, VStack, HStack, Box } from "@chakra-ui/react";

const DesktopHeaderText = () => {
  return (
    <HStack
      spacing="60px"
      alignItems="flex-start"
      justify="space-between"
      w="90%"
      mx="auto"
    >
      <VStack
        flex="0.5"
        spacing="17px"
        pt="100px"
        pb="97px"
        alignItems="flex-start"
      >
        <Heading w="100%" fontSize="64px">
          Talk To a{" "}
          <Text as="span" color="brand.500">
            {" "}
            Doctor
          </Text>{" "}
          Today For Less Than a{" "}
          <Text as="span" color="brand.500">
            {" "}
            Dollar
          </Text>
        </Heading>
        <Text w="80%" fontWeight="bold" fontSize="20px">
          Let’s help get you care from a licensed medical practitioner with less
          than a dollar at your convienence.
        </Text>
        <HStack w="full" as="span" spacing="12px" h="full">
          <Link passHref={true} href="/signup">
            <Button fontSize={"18px"} flex="0.3" h="60px">
              Get started
            </Button>
          </Link>

<Link passHref={true} href="/login">
          <Button variant="outline" fontSize={"18px"} flex="0.3" h="60px">
            Login
          </Button>

          </Link>
        </HStack>
      </VStack>

      <Box flex="0.4">
        <Image
          alt="landing Page Header"
          src="/img/homepage-image-desktop.png"
          width={480}
          height={616}
        />
      </Box>
    </HStack>
  );
};

export default DesktopHeaderText;
