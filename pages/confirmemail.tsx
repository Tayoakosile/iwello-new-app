import React from "react";
import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import IwelloBack from "../reusables/IwelloBack";
import { RootState } from "../stores/reduxstore";

const ConfirmEmail = () => {
  const { email } = useSelector(
    (state: RootState) => state.userSignUpDetails.value
  );
  return (
    <>
      <IwelloBack m={{ base: "6", md: "8" }} />
      <Center h={{ base: "70vh", md: "80vh" }} as="section" w="80%" mx="auto">
        <VStack spacing={{ base: "1", md: "3" }}>
          <Heading
            w="80%"
            textAlign={"center"}
            fontSize={{ base: "24px", md: "32px" }}
          >
            Please confirm your email address
          </Heading>
          <Text fontSize={{ base: "md", md: "24px" }}>
            A confirmatory email has been sent to:{" "}
          </Text>
          <Heading
            fontSize={{ base: "18px", md: "26px" }}
            as="span"
            color="brand.500"
          >
            {email}
          </Heading>
          {/* <Button>Back</Button> */}
        </VStack>
      </Center>
    </>
  );
};

export default ConfirmEmail;