import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/rubik";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { customTheme } from "../config/config";
import store from "../stores/reduxstore";
import usePageFullyLoaded from "./hooks/usePageFullyLoaded";

const Layout = ({ router, children }: { router: any; children: ReactNode }) => {
  const { pageFullyLoaded } = usePageFullyLoaded();

  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          {/* {!pageFullyLoaded ? (
          <React.Fragment>
            <>{children}</>
          </React.Fragment>
        ) : (
          <Loader />
        )} */}
          <>{children}</>

          {/* <>{children}</> */}
        </ScaleFade>
      </Provider>
    </ChakraProvider>
  );
};

export default Layout;
