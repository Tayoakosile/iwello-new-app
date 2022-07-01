import { Flex, FlexProps, useDisclosure } from "@chakra-ui/react";
import DoctorLeftMenu from "./DoctorLeftMenu";
import DoctorRightMenu from "./DoctorRightMenu";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
//* THis contains Doctor's Mobile Menu (Both right and left menu)
const DoctorMobileMenu = ({ ...rest }) => {
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
      <DoctorLeftMenu />
      <DoctorRightMenu />
    </Flex>
  );
};
export default DoctorMobileMenu;
