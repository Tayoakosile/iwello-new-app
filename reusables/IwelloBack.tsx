import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const IwelloBack = () => {
  return (
    <Icon
      as={IoArrowBackOutline}
      d={{ base: "none", lg: "block" }}
      color="brand.500"
    />
  );
};

export default IwelloBack;
