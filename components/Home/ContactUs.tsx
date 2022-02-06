import {
  Box, Button, FormControl,
  FormErrorMessage,
  Heading, Input,
  Textarea,
  VStack
} from "@chakra-ui/react";
import React from "react";
import UseContactUs from "../hooks/UseContactUs";

const ContactUs = () => {
  const { register, mockisLoadingState, handleSubmit, SubmitForm, errors } =
    UseContactUs();
  return (
    <Box
      as="section"
      d={{ base: "block", lg: "none" }}
      id="contact"
      px="23px"
      bg="#F8F5F5"
      pt="55px"
      pb="64px"
    >
      <Heading fontSize="16px" pb="25px">
        Contact Us
      </Heading>
      <VStack spacing="15px" onSubmit={handleSubmit(SubmitForm)} as="form">
        {/* Name */}
        <FormControl isInvalid={errors && errors.name}>
          <Input
            //   Validates the form
            {...register("name", {
              required: "Your name is required",
              min: {
                value: 2,
                message: "Name must be more than 2 characters",
              },
            })}
            h="60px"
            colorScheme="brand"
            bg="#fff"
            placeholder="Name"
            id="name"
            type="text"
            border="0px"
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors && errors.email}>
          <Input
            h="60px"
            {...register("email", {
              required: "Your Email address is required",
              min: {
                value: 4,
                message: "Name must be more than 2 characters",
              },
            })}
            bg="#fff"
            placeholder="Email Address"
            border="0px"
            colorScheme="brand"
            id="email"
            type="email"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors && errors.message}>
          <Textarea
            {...register("message", {
              required: "Message Required",
              minLength: {
                value: 5,
                message: "Message must be more than 5 characters",
              },
            })}
            resize="none"
            h="60px"
            colorScheme="brand"
            bg="#fff"
            placeholder="Message"
            border="0px"
            id="Message"
            type="text"
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={mockisLoadingState}
          loadingText="Submitting..."
          borderRadius="4px"
          variant="outline"
          w="50%"
          h="50px"
          alignSelf="flex-end"
          mt="14px"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactUs;
