import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  TabPanelProps,
} from "@chakra-ui/react";
import React from "react";
import MetaTags from "../../reusables/MetaTags";
import PatientMenu from "../../components/Patient/PatientMenu";
import Doctor from "../../components/Patient/Tabs/DoctorTab/Doctors";

const Patient = () => {
  return (
    <>
      <PatientMenu />
      <Tabs isFitted w="95%" mx="auto">
        <MetaTags
          key={30}
          title="Oredipe Olanrewaju's profile ~ Iwello | Quality Healthcare you can trust
"
        />
        <TabList w="full">
          <Tab>Doctor</Tab>
          <Tab>Pharmacist</Tab>
        </TabList>
        <TabPanels w="full">
          <TabPanel w="full">
            <Doctor />
          </TabPanel>
          <TabPanel>Pharmacist section here</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Patient;
