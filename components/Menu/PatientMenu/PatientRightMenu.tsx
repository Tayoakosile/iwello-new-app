import {
  Avatar,
  Heading,
  Icon,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart3, BsBell } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { VStack, Box, Text, Divider } from "@chakra-ui/react";
import { PatientMenuItems } from "../../../config/config";

const PatientRightMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack align="center" fontSize="24px" spacing="23px" fontFamily="Roboto">
        <span>
          <Icon as={BsCart3} />
        </span>
        <span>
          <Icon as={BsBell} />
        </span>
        <span onClick={onOpen}>
          <Icon as={BiMenu} fontSize="30px" />
        </span>
      </HStack>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        onOverlayClick={onClose}
      >
        <DrawerContent w="90% !important" pl="50px" mt="10px">
          <DrawerCloseButton />
          <VStack align="flex-start" spacing="24px" pt="60px">
            {PatientMenuItems.map((menuItem) => (
              <>
                <HStack as="span" fontFamily="Rubik" key={menuItem.link}>
                  <Icon as={menuItem.SvgIcon} strokeWidth={1} />
                  <Text fontSize="16px" as="span">
                    {menuItem.link}
                  </Text>
                </HStack>
                <Divider />
              </>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PatientRightMenu;
