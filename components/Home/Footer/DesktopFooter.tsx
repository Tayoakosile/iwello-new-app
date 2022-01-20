import { Box, Button, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import DesktopContactUs from "../DesktopContactUs";

const DesktopFooter = () => {
  return (
    <HStack
      as="footer"
      py="90px"
      pl="100px"
      pr="60px"
      w="100%"
      align="flex-start"
      bg="#F6F2FF"
      mx="auto"
      justify="space-between"
    >
      {/* Nav links */}
      <VStack as="span" flex="0.2" spacing="11px" alignItems={"flex-start"}>
        <Button
          fontWeight="400 !important"
          size="lg"
          color="brand.800 !important"
          variant="link"
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          fontWeight="400 !important"
          size="lg"
          color="brand.800 !important"
          variant="link"
        >
          <Link href="/">About Us</Link>
        </Button>
        <Button
          fontWeight="400 !important"
          size="lg"
          color="brand.800 !important"
          variant="link"
        >
          <Link href="#testimonial">Testimonials</Link>
        </Button>
      </VStack>

      <VStack as="span" flex="0.2" spacing="11px" alignItems={"flex-start"}>
        <Button
          fontWeight="400 !important"
          size="lg"
          color="brand.800 !important"
          variant="link"
        >
          <Link href="/">Services</Link>
        </Button>
        <Button
          fontWeight="400 !important"
          size="lg"
          color="brand.800 !important"
          variant="link"
        >
          <Link href="/">The Team</Link>
        </Button>
      </VStack>

      {/* Social media Icons */}
      <VStack flex="0.2" align="flex-start" spacing="7px">
        <Box as="span">
          <Heading size="md">Contact us</Heading>
          <Link href="mailto:info@iwello.org">info@iwello.org</Link>
        </Box>
        {/* Social media links */}
        <HStack spacing="9px" color="brand.800">
          <Link href="https://api.whatsapp.com/send?phone=2347012188299">
            <Icon aria-label="Whatsapp" as={FaWhatsapp} />
          </Link>
          <Link href="https://www.instagram.com/iwellong/?hl=en">
            <Icon aria-label="Instagram" as={FaInstagram} />
          </Link>
          <Link aria-label="Facebook" href="https://m.facebook.com/iwelloNG/">
            <Icon as={FaFacebook} />
          </Link>

          <Link href="https://www.linkedin.com/mwlite/company/iwellong">
            <Icon aria-label="Linkedin" as={FaLinkedin} />
          </Link>
        </HStack>
      </VStack>
      {/* COntact us FOrm */}
      <DesktopContactUs />
    </HStack>
  );
};

export default DesktopFooter;
