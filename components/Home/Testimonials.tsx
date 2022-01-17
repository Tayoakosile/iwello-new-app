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
      py="43px"
      px="16px"
      h="270px"
      w="full"
      bg="white"
      spacing="8px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      borderRadius="5px"
    >
      <Avatar src="" name={avatar} bg="brand.100" color="brand.500" />
      <Heading fontSize="16px">{heading}</Heading>
      <Text fontSize="14px" lineHeight="16.41px">
        {text}
      </Text>
      <Text pt="24px    " alignSelf="flex-end" color="brand.500">
        {name}
      </Text>
    </VStack>
  );
};
const Testimonials = () => {
  return (
    <Box bg="#F8F5F5" as="section" pt="52px" px="22px" pb="86px">
      <Heading
        fontSize="48px"
        lineHeight="56.25px"
        color="#6D40E5"
        opacity="0.05"
        fontWeight="bolder"
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
