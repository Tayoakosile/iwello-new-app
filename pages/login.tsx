import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import LoginForm from "../components/Login/LoginForm";
import IwelloLogo from "../reusables/IwelloLogo";

const login = () => {
  return (
    <Box as="section" py={{ base: "32px" }} px={{ base: "23px" }}>
      <VStack spacing={{ base: "22px" }}>
        <IwelloLogo />
        <Box as="span" textAlign="center">
          <Heading>Welcome Back</Heading>
          <Text
            color="#4E4C4C"
            fontWeight={"400"}
            fontSize={{ base: "18px" }}
          >
            Please login into your account
          </Text>
        </Box>
        <LoginForm />
      </VStack>
    </Box>
  );
};

export default login;
