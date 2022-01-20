import React from "react";

import { Box, Avatar, Heading, VStack, Text, Stack } from "@chakra-ui/react";
import { Testimonials, TestimonialsArray } from "../../config/config";
import UseMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";

/*
 *Individual Client Testifier Components
 */
const Testimonial = ({ name, heading, text, avatar }: Testimonials) => {
  const { toggleNavbar } = UseMeasureMediaQuery();
  return (
    <VStack
      as="section"
      alignItems="flex-start"
      py="33px"
      px={{ base: "16px", lg: "60px" }}
      flex="0.5"
      h="fit"
      w="full"
      bg="white"
      position="relative"
      spacing="8px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      borderRadius="5px"
    >
      {/* SHows user's avatar on the page */}
      {toggleNavbar ? (
        <>
          <Avatar
            alt="Image of Patient"
            size="lg"
            name={avatar}
            position="absolute"
            top="-8"
            left="4"
            bg="gray.100"
            color="brand.800"
          />
        </>
      ) : (
        <>
          <Avatar
            alt="Image of Patient"
            name={avatar}
            bg="gray.100"
            color="brand.800"
          />
        </>
      )}

      <Heading pt="40px" fontSize={{ base: "16px", lg: "24px" }}>
        {heading}
      </Heading>
      <Text
        color="black"
        fontSize={{ base: "14px", lg: "18px" }}
        lineHeight={{ base: "20px", lg: "24px" }}
        fontWeight="400"
      >
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
      bg={{ base: "#F8F5F5", lg: "transparent" }}
      id="testimonials"
      as="section"
      position="relative"
      pt={{ base: "52px", lg: "114px" }}
      px="22px"
      pb="86px"
    >
      <Heading
        fontSize={{ base: "48px", lg: "144px" }}
        lineHeight="56.25px"
        color="#000000"
        ml={{ base: "0", lg: "8" }}
        opacity="0.05"
        fontFamily={"Roboto"}
        fontWeight="900"
        mb={{ base: "-10px", lg: "0px" }}
      >
        Testimonials
      </Heading>
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems="flex-start"
        w={{ base: "100%", lg: "90%" }}
        mx={{ base: "0", lg: "auto" }}
        spacing={{ base: "54px", lg: "93px" }}
      >
        {TestimonialsArray.map(({ name, heading, text, avatar }) => (
          <Testimonial
            key={name}
            name={name}
            heading={heading}
            text={text}
            avatar={avatar}
          />
        ))}{" "}
      </Stack>
    </Box>
  );
};

export default Testimonials;
