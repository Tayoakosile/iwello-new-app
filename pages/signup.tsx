import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import IwelloLogo from "../reusables/IwelloLogo";
import Menu from "../components/SignUp/Menu";
import SignUpForm from "../components/SignUp/SignUpForm";

const signup = () => {
  return (
    <Box as="section" py={{ base: "32px" }} px={{ base: "23px" }}>
      <VStack spacing={{ base: "22px" }}>
        <IwelloLogo />
        <Box as="span" textAlign="center">
          <Heading>Let’s Get You Started</Heading>
          <Text
            color="#4E4C4C"
            fontWeight={"semibold"}
            fontSize={{ base: "18px" }}
          >
            Are you signing up as a:
          </Text>
        </Box>
        {/* Patient or Doctor dropdown */}
        <Menu />
        {/* Patient or Doctor dropdown */}
        <SignUpForm />
      </VStack>
    </Box>
  );
};

export default signup;
