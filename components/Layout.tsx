import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import "@fontsource/roboto";
import React, { ReactNode } from "react";
import { customTheme } from "../config/config";
import usePageFullyLoaded from "./hooks/usePageFullyLoaded";
import Loader from "./Loader";
import NavBar from "./Navbar/NavBar";
const Layout = ({ router, children }: { router: any; children: ReactNode }) => {
  const { pageFullyLoaded } = usePageFullyLoaded();
  return (
    <ChakraProvider theme={customTheme}>
      <ScaleFade key={router.route} initialScale={0.9} in={true}>
        {/* If page is fully loaded */}
        {!pageFullyLoaded ? (
          <React.Fragment>
            <NavBar />
            <>{children}</>
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </ScaleFade>
    </ChakraProvider>
  );
};

export default Layout;
