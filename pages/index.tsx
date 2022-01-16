import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraImage } from "../config/config";

const index = () => {
  return (
      <Box mt='32' h='300px'>
        <ChakraImage src={"/img/homepage-image.png"} layout="fill" />
      </Box>
  );
};

export default index;
