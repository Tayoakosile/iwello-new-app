import {
    Flex,
    FlexProps, useDisclosure
} from "@chakra-ui/react";
import PatientLeftMenu from "./PatientLeftMenu";
import PatientRightMenu from "./PatientRightMenu";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const PatientMobileMenu = ({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      <PatientLeftMenu />
      <PatientRightMenu />
    </Flex>
  );
};
export default PatientMobileMenu;
