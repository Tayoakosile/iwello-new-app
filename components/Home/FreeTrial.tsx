import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import UseMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";

const FreeTrial = () => {
  // const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <VStack
      as="section"
      bgImage={{
        base: "linear-gradient(251.38deg, rgba(0, 0, 0, 0.5) 20.16%, rgba(0, 0, 0, 0.5) 44.35%, rgba(0, 0, 0, 0) 93.06%),url('/img/trial.png')",
        lg: "linear-gradient(-254.52deg, rgba(0, 0, 0, 0.5) 27.54%, rgba(0, 0, 0, 0.5) 37.59%, rgba(0, 0, 0, 0) 57.83%),url('/img/trial-desktop.png')",
      }}
      bgRepeat="no-repeat"
      bgSize="cover"
      color="#fff"
      h={{ base: "320px", lg: "574px" }}
      align={{ base: "center", lg: "flex-start" }}
      pl={{ base: "0px", lg: "154px" }}
      pt={{ base: "56px", lg: "158px" }}
      textAlign={{ base: "center", lg: "left" }}
      spacing="25px"
    >
      <VStack as="span" align={{ base: "center", lg: "flex-start" }}>
        <Text pb="3px" fontSize={{ base: "16px", lg: "18px" }} fontWeight="500">
          Not convinced yet?
        </Text>
        <Heading fontSize={{ base: "24px", lg: "48px" }}>
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
        <Button
          fontSize="14px"
          w={{ base: "60%", lg: "20%" }}
          h={{ base: "14", lg: "16" }}
          px="20px"
          mx="auto"
          size="lg"
        >
          Sign Up
        </Button>
      </Link>
    </VStack>
  );
};

export default FreeTrial;
