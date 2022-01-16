import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box as="section" pt="32px">
      <Heading>About us</Heading>
      <HStack spacing="10px">
        <Text>
          {" "}
          Getting care from a licensed medical practitioner is a big step, with
          iWello, you can find trusted medical personnel close to your location
          as fast as lighting for less than a dollar! No more high medical bills
          and travelling distances to get the perfect service.{" "}
        </Text>
        <Text>
          We are a passion project supported by a team of health enthusiasts who
          want to put a huge dent in the continuous devastating trend...
        </Text>
      </HStack>
    </Box>
  );
};

export default AboutUs;
