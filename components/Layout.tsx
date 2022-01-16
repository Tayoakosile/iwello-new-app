import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { customTheme } from "../config/config";
import NavBar from "./NavBar";
import MobileNav from "./Navbar/MobileNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <MobileNav />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
