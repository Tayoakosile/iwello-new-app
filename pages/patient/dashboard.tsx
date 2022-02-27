import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import MetaTags from "../../reusables/MetaTags";
import ConsultDoctor from "../../components/Patient/Desktop/ConsultDoctor";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPatientPageIndex } from "../../stores/patientPageIndex";

const Patient = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 2 }));
  }, [dispatch]);
  return (
    <>
      <Box as="section" d={{ base: "block", md: "none" }}>
        <MetaTags
          title="Patient's Dashboard ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
          description="Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!"
        />
      </Box>
      <Box as="section" d={{ base: "none", md: "block" }}>
        <MetaTags
          title="Patient's Dashboard ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
          description="Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!"
        />
        <ConsultDoctor />
      </Box>
    </>
  );
};

export default Patient;
