import { HStack, Box, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <HStack
      align="center"
      bg="white"
      px="60px"
      justify="space-between"
      h="100px"
    >
      <HStack as="nav" align="center" spacing="39px">
        <Link href="/">
          <Box as="span" cursor="pointer">
            <Image
              src="/img/logo/iwello-desktop.svg"
              width={108}
              height={100}
            />
          </Box>
        </Link>

        <HStack
          textTransform="capitalize"
          alignItems="center"
          spacing="40px"
          as="ol"
        >
          {[
            { link: "home", no: "01" },
            { link: "testimonials", no: "02" },
            { link: "services", no: "03" },
            { link: "about us", no: "04" },
            { link: "team", no: "05" },
          ].map(({ link, no }) => (
            <Heading
              as="li"
              listStyleType="none"
              color="#4E4C4C"
              key={no}
              fontWeight="bold"
              fontSize="18px"
            >
              {/* If user clicks on home link then navigate to home or just navigate in between divs */}
              <Link href={`${link === "home" ? "/" : "#" + link}`}>{link}</Link>
            </Heading>
          ))}
        </HStack>
      </HStack>
      {/* contact us and get started */}
      <HStack spacing="28px" align="center">
        <Box
          as="span"
          listStyleType="none"
          fontWeight="bold"
          fontSize="18px"
          whiteSpace="nowrap"
          textTransform="capitalize"
        >
          <Link href="#contact">Contact us</Link>
        </Box>
        <Button borderRadius="4px" w="150px" h="45px">
          <Link href="/signup">Get Started</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default DesktopNav;
