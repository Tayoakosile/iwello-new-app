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
      px="30px"
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
          as="ol"
          spacing="32px"
          sx={{
            ".iwello__link": {
              p: 2,
              fontSize: "16px",
              fontWeight: 500,
              color: "brand.900",
            },
          }}
        >
          {MenuItems.map((menuItem) => (
            <Link key={menuItem.link} passHref href={`/#${menuItem.link}`}>
              <ChakraLink textStyle={"none"} className="iwello__link">
                {menuItem.text}
              </ChakraLink>
            </Link>
          ))}
        </HStack>
      </HStack>

      {/* Login and get started */}
      <HStack spacing="30px" as="span">
        <Link passHref href="/login">
          <ChakraLink
            fontWeight={500}
            color="brand.500"
            className="iwello__link"
          >
            Login
          </ChakraLink>
        </Link>
        <Link passHref href="/signup">
          <Button> Get Started</Button>
        </Link>
      </HStack>
    </HStack>
  );
};

export default DesktopMenu;
