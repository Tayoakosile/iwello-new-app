import React from "react";
import { SignUp } from "../config/config";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const SignUpOrSignIn = ({ text, linkText, link }: SignUp) => {
  return (
    <Heading size="sm" alignSelf={"center"} pt="26px">
      {text}
      <Text pl='1' as="span" color="brand.500">
        {""}
        <Link href={link}>{linkText}</Link>
      </Text>
    </Heading>
  );
};

export default SignUpOrSignIn;
