import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ServiceArrayProp, ServiceProps } from "../../config/config";
import UseMeasureMediaQuery from "../hooks/UseMeasureMediaQuery";

const Service = ({ text, imageSrc, linkText, heading }: ServiceProps) => {
  return (
    <VStack
      // shadow="lg"
      alignItems={{ base: "flex-start", lg: "center" }}
      px="21px"
      py="20px"
      shadow="sm"
      spacing={{ base: "9px", lg: "15px" }}
      cursor="pointer"
      transition="0.3s all ease-in"
      flex="0.33"
      _hover={{
        shadow: "xl",
      }}
      _focus={{
        shadow: "xl",
      }}
    >
      <Box as="span">
        <Image
          alt="A doctor attending to a patient"
          objectFit={"contain"}
          height="300px"
          width="100%"
          src={imageSrc}
        />
      </Box>

      <Box>
        <Heading size="sm">{heading}</Heading>
        <Text w="85%" pt="9.5px">
          {text}
        </Text>
      </Box>
      <Link href="/signup">
        <Button
          alignSelf={{ base: "flex-end", lg: "flex-start" }}
          rightIcon={<BsArrowRight />}
          alignItems="center"
          colorScheme="brand"
          fontWeight="800"
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
        pb={{ base: "0px", md: "10px" }}
        fontSize={{ base: "18px", md: "36px" }}
        px={{ base: "20px", lg: "80px" }}
        color="brand.500"
      >
        Our Services
      </Heading>

      <Stack
        direction={{ base: "column", lg: "row" }}
        mx={{ base: "auto", lg: "auto" }}
        w={{ base: "95%", lg: "90%" }}
        align="center"
        justify="center"
        spacing={{ base: "32px", lg: "13px" }}
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
