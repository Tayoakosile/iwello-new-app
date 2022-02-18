import { extendTheme, chakra, withDefaultColorScheme } from "@chakra-ui/react";
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
  svg: React.SVGAttributes<SVGElement>;
  link: string;
}
export const DoctorMenuItems: DoctorNavBarItems[] = [
  {
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.47826 8.30769C4.44046 8.30769 3.44516 7.943 2.71132 7.29383C1.97748 6.64467 1.56522 5.76421 1.56522 4.84615V2.07692C1.56522 1.89331 1.64767 1.71722 1.79444 1.58739C1.94121 1.45755 2.14026 1.38462 2.34783 1.38462H3.13043C3.33799 1.38462 3.53705 1.31168 3.68382 1.18184C3.83059 1.05201 3.91304 0.875919 3.91304 0.692308C3.91304 0.508696 3.83059 0.332605 3.68382 0.202772C3.53705 0.0729393 3.33799 0 3.13043 0H2.34783C1.72514 0 1.12796 0.218818 0.687662 0.608317C0.24736 0.997815 0 1.52609 0 2.07692V4.84615C0.00100598 5.62828 0.216604 6.3985 0.628278 7.09067C1.03995 7.78284 1.6354 8.37627 2.36348 8.82C3.06299 9.36556 3.63029 10.0308 4.03113 10.7757C4.43196 11.5206 4.65802 12.3296 4.69565 13.1538C4.69565 14.4391 5.27282 15.6718 6.3002 16.5806C7.32757 17.4894 8.72098 18 10.1739 18C11.6268 18 13.0203 17.4894 14.0476 16.5806C15.075 15.6718 15.6522 14.4391 15.6522 13.1538V12.3646C16.3899 12.1961 17.0328 11.7954 17.4605 11.2375C17.8881 10.6797 18.071 10.003 17.975 9.33438C17.879 8.66574 17.5107 8.05103 16.939 7.60547C16.3673 7.15991 15.6315 6.91409 14.8696 6.91409C14.1076 6.91409 13.3719 7.15991 12.8002 7.60547C12.2285 8.05103 11.8601 8.66574 11.7641 9.33438C11.6681 10.003 11.851 10.6797 12.2787 11.2375C12.7063 11.7954 13.3492 12.1961 14.087 12.3646V13.1538C14.087 14.0719 13.6747 14.9524 12.9408 15.6015C12.207 16.2507 11.2117 16.6154 10.1739 16.6154C9.13611 16.6154 8.14081 16.2507 7.40697 15.6015C6.67313 14.9524 6.26087 14.0719 6.26087 13.1538C6.30048 12.3285 6.52898 11.5189 6.93254 10.774C7.3361 10.0291 7.90632 9.36434 8.60869 8.82C9.33388 8.37473 9.92628 7.78063 10.3352 7.08855C10.7441 6.39648 10.9573 5.62705 10.9565 4.84615V2.07692C10.9565 1.52609 10.7092 0.997815 10.2689 0.608317C9.82855 0.218818 9.23137 0 8.60869 0H7.82608C7.61852 0 7.41946 0.0729393 7.2727 0.202772C7.12593 0.332605 7.04348 0.508696 7.04348 0.692308C7.04348 0.875919 7.12593 1.05201 7.2727 1.18184C7.41946 1.31168 7.61852 1.38462 7.82608 1.38462H8.60869C8.81625 1.38462 9.01531 1.45755 9.16208 1.58739C9.30885 1.71722 9.3913 1.89331 9.3913 2.07692V4.84615C9.3913 5.30073 9.29009 5.75085 9.09344 6.17083C8.89679 6.5908 8.60856 6.9724 8.2452 7.29383C7.88184 7.61526 7.45047 7.87024 6.97571 8.0442C6.50096 8.21816 5.99213 8.30769 5.47826 8.30769ZM14.8696 11.0769C14.4544 11.0769 14.0563 10.931 13.7628 10.6714C13.4692 10.4117 13.3043 10.0595 13.3043 9.69231C13.3043 9.32508 13.4692 8.9729 13.7628 8.71324C14.0563 8.45357 14.4544 8.30769 14.8696 8.30769C15.2847 8.30769 15.6828 8.45357 15.9763 8.71324C16.2699 8.9729 16.4348 9.32508 16.4348 9.69231C16.4348 10.0595 16.2699 10.4117 15.9763 10.6714C15.6828 10.931 15.2847 11.0769 14.8696 11.0769Z"
          fill="#6D40E5"
        />
      </svg>
    ),
    link: "Consultation",
  },

  {
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.2904 17.7576C3.16118 17.8809 3.00258 17.9612 2.83323 17.9891C2.66388 18.0169 2.4908 17.9912 2.33432 17.9149C2.17784 17.8385 2.04444 17.7148 1.9498 17.5582C1.85515 17.4016 1.80319 17.2186 1.8 17.0307V14.8153C1.32261 14.8153 0.864773 14.6072 0.527208 14.2367C0.189642 13.8663 0 13.3638 0 12.8399V5.92612C0 5.40222 0.189642 4.89978 0.527208 4.52932C0.864773 4.15887 1.32261 3.95075 1.8 3.95075H11.7C12.1774 3.95075 12.6352 4.15887 12.9728 4.52932C13.3104 4.89978 13.5 5.40222 13.5 5.92612V12.8399C13.5 13.3638 13.3104 13.8663 12.9728 14.2367C12.6352 14.6072 12.1774 14.8153 11.7 14.8153H7.2027L3.2904 17.7576ZM14.4 9.89366C14.3971 10.0151 14.3971 10.1367 14.4 10.2581V9.89268C14.4045 9.78699 14.4054 8.46349 14.4036 5.92316C14.4029 5.13782 14.1181 4.38492 13.6118 3.82987C13.1056 3.27483 12.4192 2.96306 11.7036 2.96306H4.5V1.97537C4.5 1.45147 4.68964 0.949028 5.02721 0.578574C5.36477 0.208119 5.82261 0 6.3 0H16.2C16.6774 0 17.1352 0.208119 17.4728 0.578574C17.8104 0.949028 18 1.45147 18 1.97537V8.88919C18 9.41309 17.8104 9.91553 17.4728 10.286C17.1352 10.6564 16.6774 10.8646 16.2 10.8646V13.0799C16.1968 13.2678 16.1448 13.4508 16.0502 13.6075C15.9556 13.7641 15.8222 13.8878 15.6657 13.9641C15.5092 14.0404 15.3361 14.0662 15.1668 14.0383C14.9974 14.0105 14.8388 13.9302 14.7096 13.8069L14.4 13.5738V9.89366Z"
          fill="#4A4A4A"
        />
      </svg>
    ),
    link: "Message",
  },
];
