import React from "react";
import Link from "next/link";
import { Box, Button, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {
  ChakraImage,
  ServiceArrayProp,
  ServiceProps,
} from "../../config/config";

const Service = ({ text, imageSrc, linkText, heading }: ServiceProps) => {
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
      <Box as="span">
        <Image
          alt="A doctor attending to a patient"
          height="300px"
          width="500px"
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
  return (
    <Box id='services' pt="21px"  as="section">
      <Heading pb="13px" fontSize="18px" px="20px" color="brand.500">
        Our Services
      </Heading>

      <VStack mx="10px" align="flex-start" spacing="32px">
        {ServiceArrayProp.map(({ text, heading, imageSrc, linkText }) => (
          <Service
            key={heading}
            text={text}
            imageSrc={imageSrc}
            heading={heading}
            linkText={linkText}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Services;
