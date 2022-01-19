import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useSubscribe from "../hooks/useSubscribe";

const Suscribe = () => {
  const { register, errors, subscribedUser, mockisLoadingState, handleSubmit } =
    useSubscribe();
  console.log(errors, "errors");
  return (
    <VStack px="23px" as="section" align="flex-start" spacing="14px" py="60px">
      <Heading fontSize="16px">Subscribe to our newsletter</Heading>
      <Text fontSize="14px">
        Enter your email adress below to subscribe to our weekly newsletter to
        get the latest news about our services and other medical advances, you
        can unsubscribe at any time if you choose to.
      </Text>
      {/* Suscribe Input and button */}
      <HStack spacing="0" as="form" onSubmit={handleSubmit(subscribedUser)}>
        <FormControl flex="0.7" isInvalid={errors.subscribedEmail}>
          <Input
            size="lg"
            h="50px"
            {...register("subscribedEmail", {
              required: "Your Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email Address, please check again",
              },
              min: {
                value: 4,
                message: "You email address must be more than 5 characters",
              },
            })}
            placeholder="Enter your email address"
            borderRadius="0px"
            _placeholder={{ fontSize: "14px", color: "#4E4C4C80" }}
          />
          <FormErrorMessage whiteSpace="nowrap">
            {errors.subscribedEmail && errors.subscribedEmail.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          fontSize={mockisLoadingState ? "14px" : "16px"}
          variant="outline"
          isLoading={mockisLoadingState}
          loadingText="Subscribing"
          mt={
            errors.subscribedEmail && errors.subscribedEmail.message
              ? "-26px !important"
              : "0px"
          }
          type="submit"
          h="50px"
          flex="0.3"
          borderRadius="0px"
        >
          Suscribe
        </Button>
      </HStack>
      {/* Shows toast */}
    </VStack>
  );
};

export default Suscribe;
