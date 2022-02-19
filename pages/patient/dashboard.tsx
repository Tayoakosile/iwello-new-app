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

const Patient = () => {
  return (
    <Tabs isFitted>
      <MetaTags key={30} title="Oredipe Olanrewaju's profile" />
      <TabList>
        <Tab>Doctor</Tab>
        <Tab>Pharmacist</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Akosile</TabPanel>
        <TabPanel>Akosile smaule</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Patient;
