import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" pt="91px" pb="97px">
      <HStack justify="space-between" w="80%" mx="auto" align="flex-start">
        <VStack
          as="nav"
          color="brand.500"
          spacing="9px"
          alignItems={"flex-start"}
        >
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
            <Link href="/">About us</Link>
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
            <Link href="/">Testimonials</Link>
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
            <Link href="/">Services</Link>
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
            <Link href="/">The Team</Link>
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
            <ChakraLink
              aria-label="Whatsapp"
              href="https://api.whatsapp.com/send?phone=2347012188299"
            >
              <Icon as={FaWhatsapp} />
            </ChakraLink>
            <ChakraLink
              aria-label="Instagram"
              href="https://www.instagram.com/iwellong/?hl=en"
            >
              <Icon as={FaInstagram} />
            </ChakraLink>
            <ChakraLink
              aria-label="Facebook"
              href="https://m.facebook.com/iwelloNG/"
            >
              <Icon as={FaFacebook} />
            </ChakraLink>

            <ChakraLink
              aria-label="Linkedin"
              href="https://www.linkedin.com/mwlite/company/iwellong"
            >
              <Icon as={FaLinkedin} />
            </ChakraLink>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
