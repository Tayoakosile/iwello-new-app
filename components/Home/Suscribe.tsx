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
    <VStack
      px={{ base: "23px", lg: "170px" }}
      as="section"
      align="flex-start"
      spacing="14px"
      py={{ base: "60px", lg: "50px" }}
    >
      <Heading fontSize={{ base: "16px", lg: "36px" }}>
        Subscribe to our newsletter
      </Heading>
      <Text
        fontSize={{ base: "14px", lg: "18px" }}
        w={{ base: "100%", lg: "75%" }}
      >
        Enter your email adress below to subscribe to our weekly newsletter to
        get the latest news about our services and other medical advances, you
        can unsubscribe at any time if you choose to.
      </Text>
      {/* Suscribe Input and button */}

      <HStack
        spacing="0"
        w="full"
        as="form"
        pt={{ base: "", lg: "32px" }}
        onSubmit={handleSubmit(subscribedUser)}
      >
        <FormControl flex="0.7" isInvalid={errors.subscribedEmail}>
          <Input
            size="lg"
            h={{ base: "50px", lg: "70px" }}
            shadow="md"
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
            _placeholder={{
              fontSize: { base: "14px", lg: "18px" },
              color: "#4E4C4C80",
            }}
          />
          <FormErrorMessage
            whiteSpace="nowrap"
            fontSize={{ base: "16px", lg: "18px" }}
          >
            {errors.subscribedEmail && errors.subscribedEmail.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          shadow="md"
          fontSize={mockisLoadingState ? "14px" : "16px"}
          variant="outline"
          isLoading={mockisLoadingState}
          loadingText="Subscribing"
          mt={
            errors.subscribedEmail && errors.subscribedEmail.message
              ? { base: "-28px !important", lg: "-30px !important" }
              : "0px"
          }
          type="submit"
          h={{ base: "50px", lg: "70px" }}
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
