import { extendTheme, chakra, withDefaultColorScheme } from "@chakra-ui/react";
import Image from "next/image";

/**
 * Iwello Styling App Configuration,
 * 
 * Configure Default App color for buttons, text,font family

*/

export const customTheme = extendTheme(
  {
    colors: {
      brand: {
        100: "#e2d9fa",
        200: "#c5b3f5",
        300: "#a78cef",
        400: "#8a66ea",
        500: "#6d40e5",
        600: "#5733b7",
        700: "#412689",
        800: "#2c1a5c",
        900: "#160d2e",
      },
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

/**
 * Converts Next js Image Component to Chakra UI component (so as to be a ble to add more css styles)
 *
 */
export const ChakraImage = chakra(Image);
