import React from "react";
import { chakra, VStack } from "@chakra-ui/react";
import { AiOutlineApple } from "react-icons/ai";
// import AppleIcon from ".";

import {
  createButton,
  createSvgIcon,
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import useMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";

const config = {
  icon: createSvgIcon(AiOutlineApple),
  text: "Sign up with Apple",
  style: { background: "#000" },
  activeStyle: { background: "#293e69" },
  iconSize: "32px",
};
const MyAppleLoginButton = createButton(config);

const CustomizedFacebookButton = chakra(FacebookLoginButton);
const CustomizedGoogleButton = chakra(GoogleLoginButton);
const CustomizedAppleButton = chakra(MyAppleLoginButton);

// icon config

const SocialMediaSignUp = () => {
  const { toggleNavbar } = useMeasureMediaQuery();
  console.log(toggleNavbar);

  return (
    <VStack w="full" my="24px !important" spacing="-10">
      <CustomizedGoogleButton
        fontSize={{ base: "18px !important", lg: "24px !important" }}
        w={{ base: "85% !important", lg: "100% !important" }}
        h={{ base: "55px !important" }}
        align="center"
        px="31px  !important"
        fontWeight="500 !important"
        mx="auto"
        color="rgba(0, 0, 0, 0.54) !important"
        whiteSpace={"nowrap"}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={() => alert("Hello")}
      >
        <span>Continue with Google</span>
      </CustomizedGoogleButton>

      <CustomizedFacebookButton
        d={{ base: "none !important", lg: "block !important" }}
        fontSize={{ base: "18px !important", lg: "24px !important" }}
        w={{ base: "85% !important", lg: "100% !important" }}
        h={{ base: "55px !important" }}
        align="center"
        px="31px  !important"
        fontWeight="500 !important"
        mx="auto"
        color="rgba(255, 255, 255, 1) !important"
        bg="rgba(24, 119, 242, 1)  !important"
        whiteSpace={"nowrap"}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={() => alert("Hello")}
      >
        <span>Sign Up with Facebook</span>
      </CustomizedFacebookButton>
      {/*  */}
      <CustomizedAppleButton
        d={{ base: "none !important", lg: "block !important" }}
        fontSize={{ base: "18px !important", lg: "24px !important" }}
        w={{ base: "85% !important", lg: "100% !important" }}
        h={{ base: "55px !important" }}
        align="center"
        px="31px  !important"
        fontWeight="500 !important"
        mx="auto"
        color="rgba(255, 255, 255, 1) !important"
        bg="rgba(0, 0, 0, 1)  !important"
        whiteSpace={"nowrap"}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={() => alert("Hello")}
      >
        <span>Sign Up with Apple</span>
      </CustomizedAppleButton>
    </VStack>
  );
};

export default SocialMediaSignUp;
