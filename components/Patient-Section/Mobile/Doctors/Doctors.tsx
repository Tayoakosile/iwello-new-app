import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Doctor from "./Doctor";

const Doctors = () => {
  return (
    <VStack as="span" w="full" h="inherit" spacing="8px">
      <Doctor available={true} />
      <Doctor available={false} />
      <Doctor available={true} />
      <Doctor available={false} />
      <Doctor available={true} />
      <Doctor available={false} />
      <Doctor available={true} />
    </VStack>
  );
};

export default Doctors;
