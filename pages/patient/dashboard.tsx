import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import MetaTags from "../../reusables/MetaTags";
import ConsultDoctor from "../../components/Patient-Section/Desktop/ConsultDoctor";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPatientPageIndex } from "../../stores/patientPageIndex";
import PatientTabs from "../../components/Patient-Section/Mobile/Tabs";
// import useMeasureMediaQuery from "../../components/hooks/useMeasureMediaQuery";
import UseMeasureMediaQuery from "../../components/hooks/UseMeasureMediaQuery";

const Patient = () => {
  const { isTabletWidth } = UseMeasureMediaQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 2 }));
  }, [dispatch]);

  return (
    <>
      {isTabletWidth ? (
        <Box as="section" d={{ base: "none", md: "block" }}>
          <MetaTags
            title="Patient's Dashboard ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
            description="Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!"
          />
          <ConsultDoctor />
        </Box>
      ) : (
        <Box as="section" d={{ base: "block", md: "none" }}>
          <MetaTags
            title="Patient's Dashboard ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
            description="Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!"
          />
          <PatientTabs />
        </Box>
      )}
    </>
  );
};

export default Patient;
