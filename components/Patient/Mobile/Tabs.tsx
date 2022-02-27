import { TabPanels, Tabs, TabList, TabPanel, Tab } from "@chakra-ui/react";
import React from "react";
import MetaTags from "../../../reusables/MetaTags";
import Doctors from "../Mobile/Doctors/Doctors";

const PatientTabs = () => {
  return (
    <Tabs isFitted w="100%" mx="auto" h="100vh">
      <MetaTags
        key={30}
        title="Oredipe Olanrewaju's profile ~ Iwello | Quality Healthcare you can trust
"
      />
      <TabList w="full">
        <Tab>Doctor</Tab>
        <Tab>Pharmacist</Tab>
      </TabList>
      <TabPanels w="full" h="inherit">
        <TabPanel w="full" bg="yellow" h="inherit">
          <Doctors />
        </TabPanel>
        <TabPanel>Pharmacist section here</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PatientTabs;
