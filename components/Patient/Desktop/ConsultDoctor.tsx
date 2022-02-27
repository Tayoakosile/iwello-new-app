import { Heading, HStack, Icon, Input } from "@chakra-ui/react";
import { BsBell, BsCart3 } from "react-icons/bs";
import Doctors from "./Doctors/Doctors";

const ConsultDoctor = () => {
  return (
    <>
      <HStack fontSize="24px" spacing="27px" pt="10px" justify="flex-end">
        <Icon as={BsCart3} />
        <Icon as={BsBell} />
      </HStack>
      {/* input field */}
      <HStack as="span" justify="flex-end" w="full" pt="49px">
        <Input
          borderRadius={"5px"}
          w="50%"
          placeholder="Search for a doctor"
          bg="white"
          boxShadow="none !important"
          outline="none !important"
          border="0"
          size="lg"
          fontFamily="Roboto"
          _placeholder={{ color: "#C4C4C4", fontSize: "16px" }}
        />
      </HStack>
      {/* Speak with a Doctor */}
      <Heading
        color="brand.900"
        fontSize="30px"
        fontFamily={"Roboto"}
        py="20px"
      >
        Speak With a Doctor
      </Heading>

      <Doctors />
      {/* Speak with a Doctor */}
    </>
  );
};

export default ConsultDoctor;
