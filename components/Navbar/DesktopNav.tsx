import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const DesktopNav = () => {
  return (
    <HStack h="100px" bg="green" d={{ base: "none", lg: "flex" }}>
      <>
        <Image src="/img/iwello-desktop.svg" width={108} height={39} />
      </>
    </HStack>
  );
};

export default DesktopNav;
