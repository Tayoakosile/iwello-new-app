import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex, HStack,
  IconButton, Link as ChakraLink, useDisclosure,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import randomatic from "randomatic";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { MenuItems } from "../../../config/config";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      minH={"66px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderColor="brand.500"
      borderStyle={"solid"}
      align={"center"}
      bg="white"
      justify={"space-between"}
    >
      <Image
        src="/img/logo/logo-mobile.png"
        alt="Company's Logo"
        width="80px"
        height="23px"
      />

      <HStack spacing="17px">
        <Link passHref href="/signup">
          <Button>Get Started</Button>
        </Link>
        <IconButton
          onClick={onOpen}
          color="brand.900"
          fontSize="36px"
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        >
          <BiMenu />
        </IconButton>
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          h="80%"
          mt="58px"
          sx={{
            ".iwello__close--button": {
              boxShadow: "none !important",
            },
            ".iwello__link": {
              boxShadow: "none !important",
              color: "brand.900",
              fontWeight: "500",
              textDecoration: "none",
              transition: "0.3s all ease-in",
            },
            ".iwello__link:hover,.iwello__link:focus,.iwello__link:active": {
              color: "brand.500",
            },
          }}
        >
          <DrawerCloseButton size="lg" className="iwello__close--button" />
          {/* Menu starts here */}
          <DrawerBody pt="80px" pl="40px">
            <VStack align="flex-start" spacing="24px">
              {MenuItems.map((menuItems) => (
                <React.Fragment key={randomatic("0a", 12)}>
                  <Link passHref href={`/#${menuItems.link}`}>
                    <ChakraLink
                      onClick={onClose}
                      className="iwello__link"
                      fontSize="18px"
                    >
                      {menuItems.text}
                    </ChakraLink>
                  </Link>
                  <Divider border="1px solid #C4C4C4" />
                </React.Fragment>
              ))}
              {/* Login Link */}
              <Link passHref href={`/login`}>
                <ChakraLink fontSize="18px"> Login</ChakraLink>
              </Link>
              <Divider border="1px solid #C4C4C4" />
            </VStack>
          </DrawerBody>
          {/* Menu ends here */}
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default MobileMenu;
