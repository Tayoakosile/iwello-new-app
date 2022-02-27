import { HStack, Icon, Input, Heading } from "@chakra-ui/react";
import { BsBell, BsCart3 } from "react-icons/bs";

const PatientIcon = ({ text }: { text: string }) => {
  return (
    <>
      <HStack fontSize="24px" spacing="27px" pt="10px" justify="flex-end">
        <Icon as={BsCart3} />
        <Icon as={BsBell} />
      </HStack>
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
      <Heading
        color="brand.900"
        fontSize="30px"
        fontFamily={"Roboto"}
        py="20px"
      >
        {text}
      </Heading>
    </>
  );
};

export default PatientIcon;
