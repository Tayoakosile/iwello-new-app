import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import MetaTags from "../../reusables/MetaTags";
import ConsultDoctor from "../../components/Patient/Desktop/ConsultDoctor";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPatientPageIndex } from "../../stores/patientPageIndex";

const Patient = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 2 }));
  }, [dispatch]);
  return (
    <>
      <Box as="section" d={{ base: "block", md: "none" }}></Box>
      <Box as="section" d={{ base: "none", md: "block" }}>
        <ConsultDoctor />
      </Box>
    </>
  );
};

export default Patient;
