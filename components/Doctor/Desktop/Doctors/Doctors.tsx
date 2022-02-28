import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Doctor from "./Doctor";

const Doctors = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={'28px'}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((doctor) => (
        <React.Fragment key={doctor}>
          <Doctor />
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default Doctors;
