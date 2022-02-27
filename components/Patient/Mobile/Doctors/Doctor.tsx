import { Box } from "@chakra-ui/react";
import React from "react";
import DocAvailability from "../../../../reusables/DocAvailability";

const Doctor = () => {
  return (
    <Box bg="#F8F5F5" w="full" h="32" p="10px">
      <DocAvailability available={true} />
    </Box>
  );
};

export default Doctor;
