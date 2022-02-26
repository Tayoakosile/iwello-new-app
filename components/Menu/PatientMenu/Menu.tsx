import {
  Box,
  BoxProps, useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import SidebarContent from './DesktopMenu';
import PatientMobileMenu from './MobileMenu';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
  
export default function PatientMenu({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      {/* mobilenav */}
      <PatientMobileMenu display={{ base: "flex", md: "none" }} />
      <Box bg="#E5E5E5" ml={{ base: 0, md: 72 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

