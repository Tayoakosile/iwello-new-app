import { Box, Button, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <Box bg="#F8F5F5" as="section" pl="23px" pr="43px" pt="40px" pb="32px">
      <VStack
        position="relative"
        spacing="10px"
        fontSize="16px"
        align="flex-start"
      >
        <Heading
          position="absolute"
          fontSize="64px"
          zIndex="0"
          top="-38px"
          left="-46px"
          fontWeight="900"
          color="brand.500"
          opacity={"0.05"}
        >
          About Us
        </Heading>

        <Heading mt="-5px !important" fontSize="24px" color="brand.500">
          About us
        </Heading>
        <Text color="brand.900">
          {" "}
          Getting care from a licensed medical practitioner is a big step. With{" "}
          {""}
          <Text as="span" fontWeight="bold" color="brand.500">
            iWelloNG
          </Text>
          , you can find trusted medical personnel close to your location as
          fast as lighting for less than a dollar! No more high medical bills
          and travelling distances to get the perfect service.{" "}
        </Text>
        <Text>
          We are a passion project supported by a team of health enthusiasts who
          want to put a huge dent in the continuous devastating trend...
        </Text>

        <Button variant="link" alignSelf={"flex-end"}>
          <Text mr="10px" fontWeight={"400"} fontSize={"16px"}>
            Read more
          </Text>
          <Icon as={BsArrowRight} w="20px" h="20px" />
        </Button>
      </VStack>
    </Box>
  );
};

export default AboutUs;
