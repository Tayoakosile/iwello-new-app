import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { Avatar, Heading, VStack, Icon } from "@chakra-ui/react";
import { PatientMenuItems } from "../../../config/config";

const LinkItems = [
  { name: "Home" },
  { name: "Trending" },
  { name: "Explore" },
  { name: "Favourites" },
  { name: "Settings" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <VStack
      spacing="40px"
      borderRight="1px"
      borderRightColor={"red"}
      w={{ base: "full", md: 72 }}
      pos="fixed"
      {...rest}
      p="24px"
      bg="#fff"
      h="100vh"
      overflowY="auto"
    >
      {/*Logo and back icon  */}
      <HStack>
        <Image
          src="/img/logo/logo-mobile.png"
          alt="Company's Logo"
          width={"123px"}
          height="38px"
        />
      </HStack>
      {/*Logo and back icon  */}
      {/* Avatar and User name  */}
      <HStack>
        <Avatar size="xl" />
      </HStack>
      <HStack>
        <Text as="span" fontSize="24px">
          Dashboard
        </Text>
      </HStack>

      {/* Menu here */}
      <VStack as="span" w="full" spacing="20px">
        {PatientMenuItems.map((menuItems) => (
          <HStack
            p="18px"
            as="span"
            borderRadius="10px"
            bg="#F5F5F5"
            key={menuItems.link}
            w="full"
            h="16"
            cursor="pointer"
            transition="0.2s all ease-in"
            _hover={{
              bg: "brand.500",
              color: "white",
            }}
            _active={{
              transform: "scale(0.9)",
            }}
            spacing="12px"
          >
            <Icon as={menuItems.SvgIcon} fontSize="18px" />
            <Text fontSize="18px">{menuItems.link} </Text>
          </HStack>
        ))}
      </VStack>
      {/* Menu here */}
    </VStack>
  );
};
// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }

export default SidebarContent;
