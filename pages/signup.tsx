import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CompleteProfile from "../components/CompleteProfile/CompleteProfile";
import Menu from "../components/SignUp/Menu";
import SignUpForm from "../components/SignUp/SignUpForm";
import SocialMediaSignUp from "../components/SignUp/SocialMediaSignUp";
import IwelloBack from "../reusables/IwelloBack";
import IwelloLogo from "../reusables/IwelloLogo";
import MetaTags from "../reusables/MetaTags";
import SignUpOrSignIn from "../reusables/SignUpOrSignIn";
import ConfirmEmailPopup from "../components/ConfirmEmailPopup/ConfirmEmailPopup";

const signup = () => {
  return (
    <>
      <IwelloBack mt="7" mx={{ base: "4", lg: "24" }} />
      <Stack
        position="relative"
        as="section"
        direction="column"
        spacing={{ base: "22px", md: "122px" }}
        boxShadow="none"
        py={{ base: "32px" }}
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
          align="center"
          spacing={{ base: "22px", lg: "28px" }}
          flex={{ base: "1", lg: "0.6" }}
          w={{ base: "full", lg: "60%" }}
        >
          <IwelloLogo />
          <Heading textAlign={{ base: "center" }}>
            Let’s Get You Started
          </Heading>

          <Text
            fontWeight={"bold"}
            fontSize="18px"
            color=" rgba(78, 76, 76, 1)"
            textAlign={{ base: "center" }}
          >
            Are you signing up as a:
          </Text>

          <Menu />
          <SocialMediaSignUp />
          <SignUpForm />
          <SignUpOrSignIn
            text="Already have an account?"
            link="/login"
            linkText="Sign In"
          />
        </VStack>

        <CompleteProfile />
      </Stack>
      <ConfirmEmailPopup />
    </>
  );
};

export default signup;
