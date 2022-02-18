import { extendTheme, chakra, withDefaultColorScheme } from "@chakra-ui/react";
import {
  IconStethoscope,
  IconMessages,
  IconWallet,
  IconSettings,
  IconHistory,
  IconHelp,
  TablerIcon,
} from "@tabler/icons";

import Image from "next/image";
import React from "react";
import UseMeasureMediaQuery from "../components/hooks/UseMeasureMediaQuery";

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

/**
 * Defines types for the Service component
 * @example
 * type Service = {
 * text:string
 * heading:string
 * image:string
 * }
 *
 */
export interface ServiceProps {
  text: string;
  linkText: string;
  heading: string;
  imageSrc: string;
}

interface ServicePropsArray {
  text: string;
  heading: string;
  imageSrc: string;
  linkText: string;
}

/* Array to show the Services Iwello Renders */
export const ServiceArrayProp: Array<ServicePropsArray> = [
  {
    text: `We have a list of experienced doctors that you can trust to walk you
            through however you’re feeling`,
    heading: "Consultations",
    linkText: "Talk To a Doctor",
    imageSrc: "/img/Services/service-1",
  },

  {
    text: `Got that drug and don’t know if it’s 
original or fake, we got you, find out 
with the fake drug checker`,
    heading: "Fake Drug Checker",
    linkText: "Check Drug",
    imageSrc: "/img/Services/service-2",
  },

  {
    text: `We understand the sensitivity of 
needing funds for that urgent surgery, 
join our emergency surgery funding, 
No need for a line with us.`,
    heading: "Emergency Surgery Funding",
    linkText: "Find Out More",
    imageSrc: "/img/Services/service-3",
  },
];

export interface Testimonials {
  text: string;
  heading: string;
  name: string;
  avatar: string;
}

// Testimonial
/* An array of IwelloNg Testimonies */
export const TestimonialsArray: Array<Testimonials> = [
  {
    text: `“iWello came through for me with their service 
when I needed to urgently see a doctor, All I had 
to do was talk to a doctor about my symptoms 
and I was better before the end of the day”`,
    heading: "Iwello Came Through",
    name: "– ANGIE BLUE",
    avatar: "ANGIE BLUE",
  },
  {
    text: `The doctor was comfortable to talk to, I felt 
more secured talking about some personal 
issues since I wasn’t seeing a face to face 
reaction`,
    heading: "I Felt More Secured",
    name: "– TOLUWANI OWOEYE",
    avatar: "TOLUWANI OWOEYE",
  },
];

//
export interface SignUp {
  text: string;
  linkText: string;
  link: string;
}

export interface DoctorNavBarItems {
  SvgIcon: TablerIcon;
  link: string;
}
export const DoctorMenuItems: DoctorNavBarItems[] = [
  {
    SvgIcon: IconStethoscope,
    link: "Consultation",
  },

  {
    SvgIcon: IconMessages,
    link: "Messages",
  },
  {
    SvgIcon: IconWallet,
    link: "Top Wallet",
  },
  {
    SvgIcon: IconHistory,
    link: "History",
  },

  {
    SvgIcon: IconHelp,
    link: "Support",
  },
  {
    SvgIcon: IconSettings,
    link: "Setting",
  },
];
