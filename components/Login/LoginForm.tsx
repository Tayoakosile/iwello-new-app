import {
  Button,
  chakra, Divider, FormControl,
  FormLabel,
  Heading, HStack, Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
const CustomizedButton = chakra(GoogleLoginButton);

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);

  return (
    <VStack
      sx={{
        "input:focus ,input:hover ": {
          borderColor: "brand.500",
          boxShadow: "0 0 0 1px #6d40e5",
          transition: "0.3px all ease-in",
        },
      }}
      w="full"
      spacing={{ base: "45px", lg: "35px" }}
    >
      <VStack as="span" w="full">
        <CustomizedButton
          fontSize={"18px !important"}
          w={{ base: "85% !important", lg: "70% !important" }}
          h={{ base: "55px !important" }}
          align="center"
          px="31px  !important"
          mx="auto"
          whiteSpace={"nowrap"}
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          onClick={() => alert("Hello")}
        >
          <Text
            as="span"
            color="rgba(0, 0, 0, 0.54) !important"
            fontWeight="bold !important"
          >
            Sign in with Google
          </Text>
        </CustomizedButton>
        {/* Form starts here */}

        <HStack as="span" pt="48px" w="full">
          <Divider color="green" w="full" opacity="1" />
          <Text px="1">or</Text>
          <Divider color="green" w="full" opacity="1" />
        </HStack>
      </VStack>

      <VStack
        spacing="22px"
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
            type="email"
            placeholder="example@gmail.com"
          />
        </FormControl>
        {/* Email Address */}

        {/* Password */}
        <FormControl>
          <FormLabel>Password</FormLabel>

          {/* Password password */}
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
          <VStack
            as="span"
            textAlign={"right"}
            mt={{ base: "16px" }}
            align={{ base: "flex-end" }}
            color="rgba(78, 76, 76, 1)"
          >
            <Link href="/forgotpassword">Forgot Password?</Link>
          </VStack>
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
          Log in
        </Button>

        <Heading size="sm" alignSelf={"center"} pt="26px">
          Don’t have an account?{" "}
          <Text as="span" color="brand.500">
            {" "}
            <Link href="/signup">Create account</Link>
          </Text>{" "}
        </Heading>
      </VStack>
    </VStack>
  );
};

export default LoginForm;
