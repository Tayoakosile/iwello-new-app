import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import "@fontsource/roboto";
import React, { ReactNode } from "react";
import { customTheme } from "../config/config";
import usePageFullyLoaded from "./hooks/usePageFullyLoaded";
import Loader from "./Loader";
const Layout = ({ router, children }: { router: any; children: ReactNode }) => {
  const { pageFullyLoaded } = usePageFullyLoaded();
  return (
    <ChakraProvider theme={customTheme}>
      <ScaleFade key={router.route} initialScale={0.9} in={true}>
        {!pageFullyLoaded ? (
          <React.Fragment>
            <>{children}</>
          </React.Fragment>
        ) : (
          <Loader />
        )}
        
        {/* <>{children}</> */}
      </ScaleFade>
    </ChakraProvider>
  );
};

export default Layout;
