import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { customTheme } from "../config/config";
import NavBar from "./Navbar/NavBar";
import "@fontsource/roboto";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar />
      <>{children}</>
    </ChakraProvider>
  );
};

export default Layout;
