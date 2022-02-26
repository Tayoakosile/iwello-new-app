import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";
import ConsultationPopUp from "../../components/Doctor/Consultations/ConsultationPopUp";
import Consultations from "../../components/Doctor/Consultations/Consultations";
// import DoctorMenu from "../../components/Doctor/Menu/DoctorMenu";
import MetaTags from "../../reusables/MetaTags";

const DoctorDashboard = () => {
  const AnimatedHStack = motion(HStack);
  const [searchConsultation, setSearchConsultation] = useState<boolean>(false);

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
      {/* <DoctorMenu /> */}

      {/* Search and back button */}
      {searchConsultation ? (
        <AnimatedHStack
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          whileInView={{
            x: 0,
          }}
          transition={{ duration: 0.1, type: "tween" }}
          as="span"
          spacing="6"
          px="4"
        >
          <span onClick={() => setSearchConsultation(false)}>
            <IconButton
              aria-label="back-button"
              color="gray.500"
              variant="outline"
              rounded="sm"
            >
              <IoArrowBackOutline />
            </IconButton>
          </span>
          <Input
            colorScheme={"brand"}
            variant="ghost"
            placeholder="Search for a consultation..."
            size="lg"
            w="full"
          />
        </AnimatedHStack>
      ) : (
        <AnimatedHStack
          as="span"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          whileInView={{
            x: 0,
          }}
          transition={{ duration: 0.1 }}
          justify="space-between"
          px="6"
        >
          <Heading size="md" fontSize="18px">
            Consultations
          </Heading>
          <span
            onClick={() => {
              setSearchConsultation(true);
            }}
          >
            <Icon as={BsSearch} w="6" h="6" />
          </span>
        </AnimatedHStack>
      )}
      <Consultations />
      <ConsultationPopUp />
    </VStack>
  );
};

export default DoctorDashboard;
