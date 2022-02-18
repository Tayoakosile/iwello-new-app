import List from "./List";
import React from "react";

import {
  Drawer,
  VStack,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { DoctorMenuItems } from "../../../config/config";

const MenuToTheRight = ({ isOpen, onOpen, onClose }) => {
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent
          bg="white"
          rounded="sm"
          mt="10"
          h="fit-content"
          w="75% !important"
        >
          <DrawerBody my="8">
            <VStack spacing="0" h="full" w="full">
              {DoctorMenuItems.map((items) => (
                <React.Fragment key={items.link}>
                  <List SvgIcon={items.SvgIcon} link={items.link} />
                </React.Fragment>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
    </>
  );
};

export default MenuToTheRight;
