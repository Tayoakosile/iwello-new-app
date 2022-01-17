import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
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
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
