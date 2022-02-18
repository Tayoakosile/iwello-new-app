import { Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import ConsultationPopUp from "../../components/Doctor/Consultations/ConsultationPopUp";
import Consultations from "../../components/Doctor/Consultations/Consultations";
import DoctorMenu from "../../components/Doctor/Menu/DoctorMenu";
import MetaTags from "../../reusables/MetaTags";

const DoctorDashboard = () => {
  return (
    <VStack
      as="section"
      align="stretch"
      w="full"
      justify="stretch"
      spacing="43px"
      mt="10"
      fontFamily="rubik"
      sx={{
        ".headroom-wrapper": {
          h: "50px !important",
        },

        ".headroom--pinned, .headroom--unpinned": {
          bg: "white",
          h: "24",
        },
      }}
    >
      <MetaTags title="Dr Segun Odegbami's Profile ~ Iwello | Quality Healthcare you can trust " />
      {/* Doctor's Avatar,Name and Icon */}
      <DoctorMenu />

      {/* Consultation */}
      <HStack justify="space-between" px="6">
        <Heading size="md" fontSize="18px">
          Consultations
        </Heading>
        <Icon as={BsSearch} w="6" h="6" />
      </HStack>
      <Consultations />
      <ConsultationPopUp />
    </VStack>
  );
};

export default DoctorDashboard;
