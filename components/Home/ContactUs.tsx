import {
  Box,
  FormControl,
  Heading,
  Button,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Box as="section" px="23px" bg="#F8F5F5" pt="55px" pb="64px">
      <Heading fontSize="16px" pb="25px">
        Contact Us
      </Heading>
      <VStack spacing="15px" as="form">
        {/* Name */}
        <FormControl>
          <Input
            h="60px"
            colorScheme="brand"
            bg="#fff"
            placeholder="Name"
            id="name"
            type="text"
            border="0px"
          />
        </FormControl>

        <FormControl>
          <Input
            h="60px"
            bg="#fff"
            placeholder="Email Address"
            border="0px"
            colorScheme="brand"
            id="email"
            type="email"
          />
        </FormControl>

        <FormControl>
          <Textarea
            resize="none"
            h="60px"
            colorScheme="brand"
            bg="#fff"
            placeholder="Message"
            border="0px"
            id="Message"
            type="text"
          />
        </FormControl>
        {/* Submit Button */}
        <Button
          type="submit"
          borderRadius="4px"
          variant="outline"
          w="136px"
          h="40px"
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
