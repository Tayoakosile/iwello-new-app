import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Button, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Flex,
    IconButton, Input, useDisclosure
} from "@chakra-ui/react";


const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flex={{ base: 1, md: "auto" }}
        display={{ base: "flex", md: "none" }}
        bg='red'
        w='fu'
      >
        <IconButton
          onClick={onOpen}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileMenu;
