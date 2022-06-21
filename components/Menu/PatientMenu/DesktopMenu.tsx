import { Avatar, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { PatientMenuItems } from "../../../config/config";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../stores/reduxstore";
import Link from "next/link";
import { useRouter } from "next/router";
import { setPatientPageIndex } from "../../../stores/patientPageIndex";
import { randomInt } from "crypto";
import randomatic from "randomatic";

const SidebarContent = ({ ...rest }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  // This adds background color to current menu page user is in
  const { index: patientPageIndex } = useSelector(
    (state: RootState) => state.patientPageIndex.value
  );
  return (
    <VStack
      spacing="40px"
      borderRight="1px"
      borderRightColor={"brand.500"}
      w={{ base: "full", md: 80 }}
      // w='full'
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
      <VStack
        as="span"
        w="full"
        spacing="20px"
        sx={{
          ".active": {
            bg: "brand.500",
            color: "white",
            "&:hover": { bg: "brand.800" },
          },
        }}
      >
        {PatientMenuItems.map((menuItems, index) => (
          <HStack
            key={randomatic("0A", 12)}
            p="18px"
            as="span"
            borderRadius="10px"
            className={patientPageIndex === index ? "active" : ""}
            bg="#F5F5F5"
            w="full"
            h="16"
            onClick={() => {
              router.push(menuItems.link);
              dispatch(setPatientPageIndex({ index }));
            }}
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
            <Text fontSize="16px">{menuItems.text}</Text>
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
