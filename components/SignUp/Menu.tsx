import React from "react";
import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Button,
  MenuOptionGroup,
  Box,
  MenuDivider,
} from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Menu = () => {
  const [MenuOption, setMenuOptions] = React.useState<string>("Patient");
  return (
    <ChakraMenu autoSelect={false}>
      <MenuButton
        variant="outline"
        as={Button}
        aria-label="Options"
        color="brand.500"
        w={{ base: "50%" }}
        borderColor="#C4C4C4"
        size="md"
        fontSize={{ base: "18px" }}
        h={{ base: "55px" }}
        rightIcon={<AiOutlineCaretDown />}
      >
        {MenuOption}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setMenuOptions("Patient")}>Patient</MenuItem>
        <MenuItem onClick={() => setMenuOptions("Doctor")}>Doctor</MenuItem>
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
