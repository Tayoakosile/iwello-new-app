import { ChakraProvider, ScaleFade, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "@fontsource/roboto";
import "@fontsource/rubik";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { customTheme } from "../config/config";
import store from "../stores/reduxstore";
import usePageFullyLoaded from "./hooks/usePageFullyLoaded";

const Layout = ({ router, children }: { router: any; children: ReactNode }) => {
  const { pageFullyLoaded } = usePageFullyLoaded();
  const route = useRouter().route;

  console.log(route, "ROute from Layout page");
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
          <Box
            as="section"
            sx={{
              button: {
                boxShadow: "none Important",
                transition: "0.3s all ease-in",
                borderRadius: "5px !important",
              },
              "button:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            {children}
          </Box>

          {/* <>{children}</> */}
        </ScaleFade>
      </Provider>
    </ChakraProvider>
  );
};

export default Layout;
