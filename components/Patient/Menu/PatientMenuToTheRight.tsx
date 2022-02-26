import React from "react";
import List from "../../Doctor/Menu/List";
import { PatientMenuItems } from "../../../config/config";

import {
  Drawer,
  DrawerCloseButton,
  VStack,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

const PatientMenuToTheRight = ({
  isOpen,
  onOpen,
  onClose,
}: {
  onOpen: Function;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
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
          sx={{
            ".iwello__menu-close:hover,.iwello__menu-close:focus": {
              boxShadow: "none",
            },
          }}
        >
          <DrawerCloseButton size="lg" className="iwello__menu-close" />
          <DrawerBody my="8">
            <VStack spacing="0" h="full" w="full">
              {PatientMenuItems.map((items) => (
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

export default PatientMenuToTheRight;
