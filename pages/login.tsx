import React from "react";
import { Box, Divider, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import LoginForm from "../components/Login/LoginForm";
import IwelloLogo from "../reusables/IwelloLogo";
import MetaTags from "../reusables/MetaTags";

const login = () => {
  return (
    <Box
      as="section"
      w={{ base: "full", lg: "40%" }}
      py={{ base: "32px" }}
      px={{ base: "23px" }}
      mx="auto"
    >
    {/* Meta tags */}
      <MetaTags
        title="Login ~ Iwello |  Talk To a Doctor Today 
For Less Than a Dollar!"
      />
      {/* Meta tags */}

      <VStack spacing={{ base: "22px" }}>
        <IwelloLogo />
        <Box as="span" textAlign="center">
          <Heading fontFamily="Rubik">Welcome Back</Heading>
          <Text
            color="rgba(78, 76, 76, 1)"
            fontWeight={"400"}
            fontSize={{ base: "18px" }}
          >
            Please Login to your account
          </Text>
        </Box>
        <LoginForm />
      </VStack>
    </Box>
  );
};

export default login;
