import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import History from "./History";

const Histories = () => {
  return (
    <VStack as="span" px="17px"  spacing={'4px'}>
      {[1, 2, 3, 4, 5, 6].map((history) => (
        <History key={history} />
      ))}
    </VStack>
  );
};

export default Histories;
