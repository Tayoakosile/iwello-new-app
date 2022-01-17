import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";

/**
 *IwelloNG Nav-bar (Mobile)
 */

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <HStack
        d={{ base: "flex", lg: "none" }}
        as="header"
        justify="space-between"
        bg="#fff"
        alignItems={"center"}
        h="70px"
        w="full"
        px="18px"
        py="22px"
      >
        {/* <Icon/> */}
        <Image
          src="/img/logo/logo-mobile-1.svg"
          alt="Company's logo"
          width={70}
          height={23}
        />
        <HStack as="span" spacing="25px">
          <Button size="md" rounded="sm">
            {" "}
            Get started
          </Button>
          <Box as="span" ref={btnRef} onClick={onOpen}>
            <Icon as={IoMenuOutline} w="35px" h="35px" />
          </Box>
        </HStack>
      </HStack>
      {/* Menu starts here */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt="118px">
            <VStack
              textTransform="uppercase"
              color="#FFFFFF"
              alignItems="flex-start"
              spacing="40px"
            >
              {[
                { link: "home", no: "01" },
                { link: "testimonials", no: "02" },
                { link: "services", no: "03" },
                { link: "team", no: "03" },
              ].map(({ link, no }) => (
                <Heading
                  as="span"
                  onClick={onClose}
                  size="sm"
                  color="brand.500"
                  key={no}
                  fontWeight="300"
                >
                  {/* If user clicks on home link then navigate to home or just navigate in between divs */}
                  <Link href={`${link === "home" ? "/" : "#" + link}`}>
                    {link}
                  </Link>
                </Heading>
              ))}
              <Button w="100%" size="lg" h="14" mx="auto">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Menu starts here */}
    </>
  );
}
