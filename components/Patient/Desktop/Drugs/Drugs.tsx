import React from "react";
import Drug from "./Drug";
import { SimpleGrid } from "@chakra-ui/react";

const Drugs = () => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 2, lg: 3 }}
      spacing={{ base: "4px", md: "16px" }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((drug) => (
        <React.Fragment key={drug}>
          <Drug />
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default Drugs;
