import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  ServiceArrayProp,
  ServiceProps,
  ChakraImage,
} from "../../config/config";
import UseMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";

const Service = ({ text, imageSrc, linkText, heading }: ServiceProps) => {
  console.log(imageSrc);
  return (
    <VStack
      alignItems="flex-start"
      p="21px"
      shadow="sm"
      _hover={{
        shadow: "lg",
        transition: "0.3s all ease-out",
      }}
      _focus={{
        transition: "0.3s all ease-out",
        shadow: "xl",
      }}
    >
      <Box height="10px" width="13px" >
        <ChakraImage
          objectFit="contain"
          alt="A doctor attending to a patient"
          w="10px"
          layout="fill"
          src={imageSrc}
        />
      </Box>

      <Box>
        <Heading size="sm">{heading}</Heading>
        <Text w="90%" pt="9.5px">
          {text}
        </Text>
      </Box>
      <Link href="/signup">
        <Button
          alignSelf={"flex-end"}
          rightIcon={<BsArrowRight />}
          colorScheme="brand"
          fontWeight="400"
          fontSize={"14px"}
          variant="link"
        >
          {linkText}
        </Button>
      </Link>
    </VStack>
  );
};

const Services = () => {
  const { toggleNavbar } = UseMeasureMediaQuery();

  return (
    <Box id="services" pt={{ base: "21px", md: "100px" }} as="section">
      <Heading
        pb={{ base: "13px", md: "46px" }}
        fontSize={{ base: "18px", md: "36px" }}
        px={{ base: "20px", lg: "80px" }}
        color="brand.500"
      >
        Our Services
      </Heading>

      <Stack
        direction={{ base: "column", lg: "row" }}
        mx={{ base: "10px", lg: "auto" }}
        w={{ base: "100%", lg: "90%" }}
        align="flex-start"
        spacing={{ base: "32px", lg: "63px" }}
      >
        {ServiceArrayProp.map(({ text, heading, imageSrc, linkText }) => (
          <Service
            key={heading}
            text={text}
            imageSrc={
              toggleNavbar ? imageSrc + "-desktop.png" : imageSrc + ".png"
            }
            heading={heading}
            linkText={linkText}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Services;
