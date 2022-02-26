import { Box, ChakraProvider, ScaleFade } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/rubik";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { customTheme } from "../config/config";
import store from "../stores/reduxstore";
import usePageFullyLoaded from "./hooks/usePageFullyLoaded";
import DoctorMenu from "./Menu/DoctorMenu/Menu";
// import Menu from "./Menu/Menu";
import HomeMenu from "./Menu/HomeMenu/Menu";
import PatientMenu from "./Menu/PatientMenu/Menu";

const Layout = ({ router, children }: { router: any; children: ReactNode }) => {
  const { pageFullyLoaded } = usePageFullyLoaded();
  const route = useRouter().pathname;

  return (
    <ChakraProvider theme={customTheme}>
      {/* {!pageFullyLoaded ? (
          <Menu>
            <>{children}</>
          </Menu>
        ) : (
          <Loader />
        )} */}
      <Provider store={store}>
        <ScaleFade key={router.route} initialScale={0.9} in={true}>
          {/* If User is at the home page then show home menu */}

          {route.includes("/doctor") && (
            <DoctorMenu>
              <Box
                as="section"
                sx={{
                  button: {
                    boxShadow: "none !important",
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
            </DoctorMenu>
          )}

          {route.includes("/patient") ? (
            <PatientMenu>
              <Box
                as="section"
                sx={{
                  button: {
                    boxShadow: "none !important",
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
            </PatientMenu>
          ) : (
            <Box
              as="section"
              sx={{
                button: {
                  boxShadow: "none !important",
                  transition: "0.3s all ease-in",
                  borderRadius: "5px !important",
                },
                "button:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <HomeMenu />
              {children}
            </Box>
          )}

          {/* If User is a patient SHow the patient menu else show the Main Menu */}

          {/* <>{children}</> */}
        </ScaleFade>
      </Provider>
    </ChakraProvider>
  );
};

export default Layout;
