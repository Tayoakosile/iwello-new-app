import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmPassword] = useState<boolean>(false);
  const {
    register,
    handleConfirmPassword,
    setUserPassword,
    handleSubmit,
    userSignUpInfo,
    errors,
  } = useSignUp();

  return (
    <VStack
      spacing="40px"
      as="form"
      onSubmit={handleSubmit(userSignUpInfo)}
      align="flex-start"
      alignSelf="flex-start"
      w={{ base: "100%", lg: "80%" }}
    >
      {/* First name */}
      <FormControl isInvalid={errors.firstname}>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>
          First Name
        </FormLabel>
        <Input
          borderRadius="5px"
          bg="#F7F7F7"
          size="lg"
          type="text"
          placeholder="Enter your first name"
          {...register("firstname", {
            required: "Please type in your first Name",
            minLength: {
              value: 3,
              message: "First name too short, please try another",
            },
          })}
        />

        <FormErrorMessage>
          {errors.firstname && errors.firstname.message}
        </FormErrorMessage>
      </FormControl>

      {/* Last Name*/}
      <FormControl isInvalid={errors.lastname}>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>Last Name</FormLabel>
        <Input
          borderRadius="5px"
          bg="#F7F7F7"
          size="lg"
          {...register("lastname", {
            required: "Please Type in your Last Name",
            min: {
              value: 3,
              message: "Your Last name must be more than 3 character",
            },
          })}
          type="text"
          placeholder="Enter your last name"
        />
        <FormErrorMessage>
          {errors.lastname && errors.lastname.message}
        </FormErrorMessage>
      </FormControl>
      {/* Last Name */}

      {/* Email Address */}
      <FormControl isInvalid={errors.email}>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>
          Email Address
        </FormLabel>
        <Input
          borderRadius="5px"
          bg="#F7F7F7"
          size="lg"
          type="email"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Your Email Address is required",
            min: {
              value: 6,
              message: "Your Email address must be more than 3 character",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:
                " Please type in a valid email address,e.g iwello@gmail.com ",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      {/* Email Address */}

      {/* Password */}
      <FormControl isInvalid={errors.password}>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>Password</FormLabel>

        {/* Password password */}
        <InputGroup size="lg">
          <Input
            // Form Validator
            {...register("password", {
              required: "Your Password is required",
              minLength: {
                value: 6,
                message: "Your Password must be 6 letters long",
              },
            })}
            borderRadius="5px"
            type={showPassword ? "text" : "password"}
            bg="#F7F7F7"
            placeholder="**********************"
            onChange={(e) => setUserPassword(e.target.value)}
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
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      {/* Password */}

      {/* Confirm Password Input  */}
      <FormControl isInvalid={errors.confirmPassword}>
        <FormLabel fontSize={{ base: "md", lg: "1.2rem" }}>
          Confirm Password
        </FormLabel>
        <InputGroup size="lg">
          <Input
            {...register("confirmPassword", {
              required: "Please Confirm your password",
              validate: (value: string) => handleConfirmPassword(value),
            })}
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
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
      </FormControl>
      {/* Confirm Password Input */}

      <Button
        type="submit"
        alignSelf={{ base: "center", lg: "flex-start" }}
        w={{ base: "90%", lg: "100%" }}
        size="lg"
        h="50px"
        fontSize={"18px"}
        // onClick={() => Router.push("/confirmemail")}
      >
        Create Account
      </Button>
    </VStack>
  );
};

export default SignUpForm;
