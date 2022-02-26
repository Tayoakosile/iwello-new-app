import {
  Box,
  FormControl,
  FormErrorMessage,
  Heading,
  Button,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import UseDesktopContactUs from "../hooks/UseContactUs";

const DesktopContactUs = () => {
  const { register, mockisLoadingState, handleSubmit, SubmitForm, errors } =
    UseDesktopContactUs();
  console.log(errors);
  return (
    <Box as="section" flex="0.4" id="contact">
      <Heading fontSize="16px" pb="25px">
        Contact Us
      </Heading>
      <VStack
        spacing="15px"
        onSubmit={handleSubmit(SubmitForm)}
        as="form"
        id="form"
      >
        {/* User's name Input field */}
        <FormControl
          isInvalid={errors ? (true && errors.name ? true : false) : false}
        >
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
            placeholder="Name"
            id="name"
            type="text"
            border="1px solid #4E4C4C !important"
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        {/* User's name Input field */}

        {/* Email Address */}
        <FormControl
          isInvalid={errors ? (true && errors.email ? true : false) : false}
        >
          <Input
            h="60px"
            {...register("email", {
              required: "Your Email address is required",
              min: {
                value: 4,
                message: "Name must be more than 2 characters",
              },
            })}
            type="email"
            placeholder="Email Address"
            colorScheme="brand"
            id="email"
            border="1px solid #4E4C4C !important"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        {/* Email Address */}

        {/* Text Message Input */}
        <FormControl
          isInvalid={errors ? (true && errors.message ? true : false) : false}
        >
          <Textarea
            h="117px"
            {...register("message", {
              required: "Message Required",
              minLength: {
                value: 5,
                message: "Message must be more than 5 characters",
              },
            })}
            resize="none"
            colorScheme="brand"
            placeholder="Message"
            border="1px solid #4E4C4C !important"
            zIndex="100"
            id="Message"
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        {/* Text Message Input */}

        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={mockisLoadingState}
          loadingText="Submitting..."
          borderRadius="4px"
          variant="outline"
          w="50%"
          h="50px"
          alignSelf="flex-start"
          mt="14px"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default DesktopContactUs;
