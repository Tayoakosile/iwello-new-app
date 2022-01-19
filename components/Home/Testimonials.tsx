import React from "react";

import { Box, Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import { Testimonials, TestimonialsArray } from "../../config/config";

/*
 *Individual Testimony Components
 */
const Testimonial = ({ name, heading, text, avatar }: Testimonials) => {
  return (
    <VStack
      as="section"
      alignItems="flex-start"
      py="33px"
      px="16px"
      h="fit"
      w="full"
      bg="white"
      spacing="8px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      borderRadius="5px"
    >
      <Avatar alt="User name" name={avatar} bg="gray.100" color="brand.800" />
      <Heading fontSize="16px">{heading}</Heading>
      <Text color="black" fontSize="14px" lineHeight="20px">
        {text}
      </Text>
      <Text pt="24px" alignSelf="flex-end" color="brand.500">
        {name}
      </Text>
    </VStack>
  );
};
const Testimonials = () => {
  return (
    <Box
      bg="#F8F5F5"
      id="testimonials"
      as="section"
      pt="52px"
      px="22px"
      pb="86px"
    >
      <Heading
        fontSize="48px"
        lineHeight="56.25px"
        color="rgba(109, 64, 229, 1)"
        opacity="0.05"
        fontWeight="900"
        mb="-10px"
      >
        Testimonials
      </Heading>
      <VStack alignItems="flex-start" spacing="54px">
        {TestimonialsArray.map(({ name, heading, text, avatar }) => (
          <Testimonial
            key={name}
            name={name}
            heading={heading}
            text={text}
            avatar={avatar}
          />
        ))}{" "}
      </VStack>
    </Box>
  );
};

export default Testimonials;
