import {
  Box,
  HStack,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MenuItems } from "../../../config/config";

const DesktopMenu = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <HStack
      minH="84px"
      bg="white"
      align="center"
      justify="space-between"
      sx={{
        ".image": {
          objectFit: "contain !important",
        },
      }}
      w="95%"
      mx="auto"
    >
      {/* Company's logo */}
      <HStack as="span" spacing="30px">
        <Image
          className="image"
          src="/img/logo/Iwello-desktop.svg"
          alt="Company's logo"
          width="127px"
          height="40px"
        />
        <HStack
          as="span"
          spacing="32px"
          sx={{
            ".iwello__link": {},
          }}
        >
          {MenuItems.map((menuItem) => (
            <Link key={menuItem.link} passHref href={`/#${menuItem.link}`}>
              <ChakraLink
                className="iwello__link"
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color="brand.500"
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {menuItem.text}
              </ChakraLink>
            </Link>
          ))}
        </HStack>
      </HStack>

      {/* Login and get started */}
      <HStack spacing="30px" as="span">
        <Link passHref href="/login">
          <ChakraLink color="brand.500">Login</ChakraLink>
        </Link>
        <Button> Get Started</Button>
      </HStack>
    </HStack>
  );
};

export default DesktopMenu;
