import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { HStack, Icon, Heading, Divider, chakra } from "@chakra-ui/react";
import { DoctorNavBarItems } from "../../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

const CustomizedIcon = chakra(FontAwesomeIcon);
const List = ({ svg, link }: DoctorNavBarItems) => {
  return (
    <>
      <HStack bg='red'>
        {/* <Icon as={faStethoscope} /> */}
        <CustomizedIcon
          icon={faStethoscope}
          stroke="black"
          strokeWidth="1px"
          w="6"
          h="6"
          color="gray.500"
        />
        ;
        <Heading size="md" color="brand.700">
          {link}
        </Heading>
      </HStack>
      <Divider />
    </>
  );
};

export default List;
