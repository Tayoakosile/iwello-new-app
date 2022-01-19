import React from "react";
import { Box, VStack, Heading, HStack, Text, Button } from "@chakra-ui/react";

const DesktopAboutUs = () => {
  return (
    <VStack
      as="section"
      bg="linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/img/aboutUs-Desktop.png')"
      
      align="flex-start"
      w="100%"
      h="532px"
      position={"relative"}
      bgRepeat="no-repeat"
      justify="center"
      bgSize="cover"
    >
      <Heading
        fontSize="144px"
        position="absolute"
        top="20"
        ml="-10"
        color="#FFFFFF"
        opacity="0.05"
      >
        About Us
      </Heading>
      <HStack
        pl="50px"
        color="#fff"
        width="90%"
        align='center'
        mx="auto"
        justify="space-between"
      >
        <Box flex="0.5" >
          <Heading   fontSize={"32px"} pb="21px" color="brand.500">
            About us
          </Heading>
          <Text w='95%'  mx='auto' fontSize="24px" lineHeight="30px">
            Getting care from a licensed medical practitioner is a big step,
            with iWello, you can find trusted medical personnel close to your
            location as fast as lighting for less than a dollar! No more high
            medical bills and travelling distances to get the perfect service.
          </Text>
        </Box>
        <Text fontSize="24px" flex="0.4" lineHeight="30px">
          We are a passion project supported by a team of health enthusiasts who
          want to put a huge dent in the continuous devastating trend...
        </Text>
      </HStack>
    </VStack>
  );
};

export default DesktopAboutUs;
