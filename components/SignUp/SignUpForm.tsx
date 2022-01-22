import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);

  return (
    <VStack
      spacing="32px"
      as="form"
      align="flex-start"
      alignSelf="flex-start"
      w={{ base: "full", lg: "80%" }}
    >
      {/* Email Address */}
      <FormControl>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>
          Email Address
        </FormLabel>
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
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>Password</FormLabel>

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
      </FormControl>
      {/* Password */}

      {/* Confirm Password Input  */}
      <FormControl>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>
          Confirm Password
        </FormLabel>
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
      {/* Confirm Password Input */}

      <Button
        type="submit"
        alignSelf={{ base: "center", lg: "flex-start" }}
        w={{ base: "90%", lg: "100%" }}
        size="lg"
        h="50px"
        fontSize={"18px"}
      >
        Create Account
      </Button>
    </VStack>
  );
};

export default SignUpForm;
