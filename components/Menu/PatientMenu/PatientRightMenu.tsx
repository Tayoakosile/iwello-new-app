import {
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import { BsBell, BsCart3 } from "react-icons/bs";
import { PatientMenuItems } from "../../../config/config";
const PatientRightMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
          <VStack align="flex-start" spacing="10px" pt="60px">
            {PatientMenuItems.map((menuItem) => (
              <>
                <HStack
                  color="brand.900"
                  p="2"
                  transition="0.2s all ease-in"
                  _hover={{ color: "brand.500", bg: "gray.50" }}
                  _active={{ transform: "scale(0.9)" }}
                  as="span"
                  fontFamily="Rubik"
                  key={menuItem.link}
                  h="12"
                  w="80%"
                  onClick={() => {
                    router.push(`${menuItem.link}`);
                    onClose();
                  }}
                >
                  <Icon as={menuItem.SvgIcon} strokeWidth={1} />
                  <Text as="span" fontSize="16px">
                    {menuItem.text}
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
