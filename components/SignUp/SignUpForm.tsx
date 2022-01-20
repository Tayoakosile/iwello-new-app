import React, { useState } from "react";
import {
  Box,
  Text,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
const CustomizedButton = chakra(GoogleLoginButton);
import { GoogleLoginButton } from "react-social-login-buttons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);

  return (
    <VStack w="full" spacing="45px">
      <CustomizedButton
        fontSize={"18px !important"}
        w={{ base: "80% !important" }}
        h={{ base: "55px !important" }}
        align="center"
        px="31px  !important"
        mx="auto"
        color ='rgba(0, 0, 0, 0.54);'
        whiteSpace={'nowrap'}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        onClick={() => alert("Hello")}
      >
        <span>Continue with Google</span>
      </CustomizedButton>
      {/* Form starts here */}
      <VStack
        spacing="32px"
        as="form"
        align="flex-start"
        alignSelf="flex-start"
        w="full"
      >
        {/* Email Address */}
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            borderRadius="5px"
            bg="#F7F7F7"
            size="lg"
            h="60px"
            type="email"
            placeholder="example@gmail.com"
          />
        </FormControl>
        {/* Email Address */}

        {/* Password */}
        <FormControl>
          <FormLabel>Password</FormLabel>

          {/* Show password */}
          <InputGroup size="lg">
            <Input
              borderRadius="5px"
              type={showPassword ? "text" : "password"}
              bg="#F7F7F7"
              placeholder="**********************"
            />
            <InputRightElement width="4.5rem">
              <chakra.button
                color="#4E4C4C80"
                h="1.75rem"
                type="button"
                fontSize={"14px"}
                size="md"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </chakra.button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* Password */}

        {/* Password */}
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size="lg">
            <Input
              borderRadius="5px"
              bg="#F7F7F7"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="**********************"
            />
            <InputRightElement width="4.5rem">
              <chakra.button
                h="1.75rem"
                type="button"
                size="md"
                fontSize={"14px"}
                color="#4E4C4C80"
                onClick={() => setConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "HIDE" : "SHOW"}
              </chakra.button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* Password */}
        <Button
          type="submit"
          alignSelf={"center"}
          w="90%"
          size="lg"
          h="50px"
          fontSize={"18px"}
        >
          Create Account
        </Button>
        <Heading size="sm" alignSelf={"center"} pt="26px">
          Already have an account?{" "}
          <Text as="span" color="brand.500">
            {" "}
            <Link href="/login">Sign In</Link>
          </Text>{" "}
        </Heading>
      </VStack>
    </VStack>
  );
};

export default SignUpForm;
