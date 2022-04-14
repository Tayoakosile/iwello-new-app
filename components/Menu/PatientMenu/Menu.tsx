import { Box, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
// import "../../../styles/Patient.css";
import SidebarContent from "./DesktopMenu";
import PatientMobileMenu from "./MobileMenu";

export default function PatientMenu({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100%" h="100%">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      {/* mobilenav */}
      <PatientMobileMenu display={{ base: "flex", md: "none" }} />
      <Box
        bg={{ base: "#fff", md: "#E5E5E5" }}
        ml={{ base: 0, md: 80 }}
        p={{ base: "0", md: "6" }}
        h="100%"
        minHeight={"100%"} // overflowY={"hidden"}
      >
        {children}
      </Box>
    </Box>
  );
}
