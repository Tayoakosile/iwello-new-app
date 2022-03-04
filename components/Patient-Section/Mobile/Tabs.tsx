import { TabPanels, Tabs, TabList, TabPanel, Tab } from "@chakra-ui/react";
import React from "react";
import MetaTags from "../../../reusables/MetaTags";
import Doctors from "./Doctors/Doctors";

const PatientTabs = () => {
  return (
    <Tabs isFitted w="100%" h="100vh" px="0px !important" >
      <MetaTags
        key={30}
        title="Oredipe Olanrewaju's profile ~ Iwello | Quality Healthcare you can trust
"
      />
      {/* Tab title */}
      <TabList w="full">
        <Tab>Doctor</Tab>
        <Tab>Pharmacist</Tab>
      </TabList>
      {/* Tab title */}

      <TabPanels w="full" h="inherit">
        <TabPanel w="full" h="inherit">
          <Doctors />
        </TabPanel>
        <TabPanel>Pharmacist section here</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PatientTabs;
