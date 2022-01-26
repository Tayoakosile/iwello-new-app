import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CompleteProfile from "../components/CompleteProfile/CompleteProfile";
import UseMeasureMediaQuery from "../components/hooks/UseMeasureMediaQuery";
import Menu from "../components/SignUp/Menu";
import SignUpForm from "../components/SignUp/SignUpForm";
import SocialMediaSignUp from "../components/SignUp/SocialMediaSignUp";
import IwelloBack from "../reusables/IwelloBack";
import IwelloLogo from "../reusables/IwelloLogo";
import MetaTags from "../reusables/MetaTags";
import SignUpOrSignIn from "../reusables/SignUpOrSignIn";

const signup = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();

  return (
    <Stack
      position="relative"
      direction={{ base: "column", lg: "row" }}
      as="section"
      spacing={{ base: "22px", md: "122px" }}
      py={{ base: "32px", lg: "100px" }}
      px={{ base: "23px", lg: "100px" }}
      align={{ base: "center" }}
    >
      <MetaTags
        key={20}
        title="Sign-up ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar"
        description="Sign up to enjoy all the full features of IwelloNg"
      />
      <VStack
        align={{ base: "center", md: "center", lg: "flex-start" }}
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
        {!toggleNavbar && <SocialMediaSignUp />}
        <SignUpForm />
        <SignUpOrSignIn
          text="Already have an account?"
          link="/login"
          linkText="Sign In"
        />
      </VStack>
      {toggleNavbar && (
        <Box as="span" flex={{ base: "1", lg: "0.4" }}>
          <SocialMediaSignUp />
        </Box>
      )}
      <CompleteProfile />
    </Stack>
  );
};

export default signup;
