import React from "react";
import { Box, Stack, VStack, Heading, Text } from "@chakra-ui/react";
import IwelloLogo from "../reusables/IwelloLogo";
import Menu from "../components/SignUp/Menu";
import SignUpForm from "../components/SignUp/SignUpForm";
import SocialMediaSignUp from "../components/SignUp/SocialMediaSignUp";
import IwelloBack from "../reusables/IwelloBack";
import SignUpOrSignIn from "../reusables/SignUpOrSignIn";
import UseMeasureMediaQuery from "../components/hooks/UseMeasureMediaQuery";

const signup = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      as="section"
      spacing={{ base: "22px", md: "122px" }}
      py={{ base: "32px" }}
      px={{ base: "23px", lg: "100px" }}
      align={{ base: "center" }}
    >
      <VStack
        align={{ base: "center", md: "", lg: "flex-start" }}
        spacing={{ base: "22px", lg: "28px" }}
        flex={{ base: "1", lg: "0.6" }}
        w="full"
      >
        <IwelloBack />
        <IwelloLogo />
        <Heading textAlign={{ base: "center" }}>Let’s Get You Started</Heading>
        <Text
          color="#4E4C4C"
          textAlign={{ base: "center" }}
          fontSize={{ base: "18px" }}
        >
          Are you signing up as a:
        </Text>
        <Menu />
        {!toggleNavbar && (
          <SocialMediaSignUp
            mobileDisplay="flex !important"
            desktopDisplay="none !important"
          />
        )}
        <SignUpForm />
        <SignUpOrSignIn
          text="Already have an account?"
          link="/login"
          linkText="Sign In"
        />
      </VStack>
      {toggleNavbar && (
        <Box as="span" flex={{ base: "1", lg: "0.4" }}>
          <SocialMediaSignUp
          />
        </Box>
      )}
    </Stack>
  );
};

export default signup;
