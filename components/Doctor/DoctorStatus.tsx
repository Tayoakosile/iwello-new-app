import { Heading, HStack, Switch, Divider } from "@chakra-ui/react";
import React from "react";

const DoctorStatus = () => {
  return (
    <>
      <HStack
        w="50%"
        mr="auto"
        pl="4"
        justify="space-between"
        sx={{
          ".iwello__doctor--switch:hover,.iwello__doctor--switch:active,.iwello__doctor--switch:focus":
            {
              boxShadow: "none",
            },
        }}
        pt="6"
      >
        <Heading as="p" fontSize="14px">
          Status
        </Heading>
        <Switch
          colorScheme="brand"
          className="iwello__doctor--switch"
          size="md"
        />
      </HStack>
      <Divider pt='4' color='red' />
    </>
  );
};

export default DoctorStatus;
