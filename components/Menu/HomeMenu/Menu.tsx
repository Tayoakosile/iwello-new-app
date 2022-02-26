import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopMenu";
import MobileNav from "./MobileMenu";
import Image from "next/image";

export default function HomeMenu() {
  const { isOpen, onToggle } = useDisclosure();
  const CustomizedChakraImage = chakra(Image);
  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        align={"center"}
        bg="yellow"
      >
        <Flex
          bg="yellow"
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <MobileNav />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <CustomizedChakraImage
            objectFit={"contain"}
            src="/img/logo/logo-mobile.png"
            alt="Company's Logo"
            layout="fill"
            w="132px !important"
            h="132px !important"
          />
          {/* Desktop Nav */}

          <DesktopNav />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
