import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import {
  Box,
  Button,
  Icon,
  Link as ChakraLink,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box as="footer" pt="91px" px="43px">
      <HStack justify="space-between" align="flex-start">
        <VStack as="nav" color="brand.500" alignItems={"flex-start"}>
          <Button
            variant="link"
            textDecoration={"none"}
            _focus={{
              textDecor: "underline",
              transition: "0.3s all ease-in",
            }}
            fontWeight="400"
            transition="0.3s all"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="link"
            textDecoration={"none"}
            _activeLink={{
              textDecor: "underline",
              transition: "0.3s all ease-in",
            }}
            fontWeight="400"
            transition="0.3s all"
          >
            <Link href="">About us</Link>
          </Button>
          <Button
            variant="link"
            textDecoration={"none"}
            _activeLink={{
              textDecor: "underline",
              transition: "0.3s all ease-in",
            }}
            fontWeight="400"
            transition="0.3s all"
          >
            <Link href="">Testimonials</Link>
          </Button>
          <Button
            variant="link"
            textDecoration={"none"}
            _activeLink={{
              textDecor: "underline",
              transition: "0.3s all ease-in",
            }}
            fontWeight="400"
            transition="0.3s all"
          >
            <Link href="">Services</Link>
          </Button>
          <Button
            variant="link"
            textDecoration={"none"}
            _activeLink={{
              textDecor: "underline",
              transition: "0.3s all ease-in",
            }}
            fontWeight="400"
            transition="0.3s all"
          >
            <Link href="">The Team</Link>
          </Button>
        </VStack>
        <VStack align="flex-start" spacing="7px">
          <Box as="span">
            <Heading size="md">Contact us</Heading>
            <ChakraLink href="mailto:info@iwello.org">
              info@iwello.org
            </ChakraLink>
          </Box>
          {/* Social media links */}
          <HStack spacing="9px" color="brand.500">
            <ChakraLink href="https://api.whatsapp.com/send?phone=2347012188299">
              <Icon as={FaWhatsapp} />
            </ChakraLink>
            <ChakraLink href="https://www.instagram.com/iwellong/?hl=en">
              <Icon as={FaInstagram} />
            </ChakraLink>
            <ChakraLink href="https://m.facebook.com/iwelloNG/">
              <Icon as={FaFacebook} />
            </ChakraLink>

            <ChakraLink href="https://www.linkedin.com/mwlite/company/iwellong">
              <Icon as={FaLinkedin} />
            </ChakraLink>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
