import React from "react";
import { Box, VStack } from '@chakra-ui/react';
import Doctor from "./Doctor";

const Doctors = () => {
  return (
    <VStack as="span" w="full"  h='inherit' spacing='8px'>
      <Doctor />
      <Doctor />
    </VStack>
  );
};

export default Doctors;
