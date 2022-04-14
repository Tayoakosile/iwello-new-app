import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
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
              <>{children}</>
            </DoctorMenu>
          )}

          {route.includes("/patient") ? (
            <PatientMenu>{children}</PatientMenu>
          ) : (
            <>
              <HomeMenu />
              {children}
            </>
          )}
        </ScaleFade>
      </Provider>
    </ChakraProvider>
  );
};

export default Layout;
