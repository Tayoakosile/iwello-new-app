import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import Router from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";

const IwelloBack = ({ ...rest }) => {
  return (
    <Box as="span" cursor="pointer">
      <Icon
        onClick={() => Router.back()}
        as={IoArrowBackOutline}
        {...rest}
        // d={{ base: "none", lg: "block" }}
        color="brand.500"
        w={{ base: "8", md: "10" }}
        h={{ base: "8", md: "10" }}
      />
    </Box>
  );
};

export default IwelloBack;
