import React from "react";
import { SignUp } from "../config/config";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const SignUpOrSignIn = ({ text, linkText, link }: SignUp) => {
  return (
    <Heading
      fontSize={{ base: "18px", lg: "20px" }}
      position={{ base: "relative", lg: "absolute" }}
      bottom={{ base: "0", lg: "6" }}
      left={{ base: "0", lg: "45%" }}
      // mr='50%'
      alignSelf={"center"}
      pt="26px"
    >
      {text}
      <Text pl="1" as="span" color="brand.500">
        {""}
        <Link href={link}>{linkText}</Link>
      </Text>
    </Heading>
  );
};

export default SignUpOrSignIn;
