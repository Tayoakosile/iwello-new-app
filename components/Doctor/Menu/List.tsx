import React from "react";
import { FaAddressBook } from "react-icons/fa";
import {
  HStack,
  Icon,
  Box,
  Heading,
  Divider,
  chakra,
  transition,
} from "@chakra-ui/react";
import { DoctorNavBarItems } from "../../../config/config";
import { IconStethoscope, IconMessages } from "@tabler/icons";

const List = ({ SvgIcon, link }: DoctorNavBarItems) => {
  const CustomizedIcon = chakra(SvgIcon);
  return (
    <>
      <HStack
        spacing="3"
        px='4'
        w="full"
        align="center"
        h="20"
        transition={"0.2s all ease-in"}
        role="group"
        color="brand.900"
        _hover={{
          bg: "#e2d9fa45",
          color: "brand.500",
          fontWeight: 700,
        }}
        _focus={{
          bg: "brand.100",
        }}
      >
        <Icon
          opacity="0.7"
          as={SvgIcon}
          color="inherit" // set `stroke` color
          strokeWidth={1} // set `stroke-width`
          fontSize={24}
        />
        <Heading
          fontFamily={"Rubik"}
          fontSize="16px"
          fontWeight="inherit"
          color="inherit"
        >
          {link}
        </Heading>
      </HStack>

      <Divider />
    </>
  );
};

export default List;
