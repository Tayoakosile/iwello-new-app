import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { setPatientPageIndex } from "../../stores/patientPageIndex";
import Drugs from "../../components/Patient-Section/Desktop/Drugs/Drugs";
import BuyDrugs from "../../components/Patient-Section/Desktop/BuyDrugs";
import MetaTags from "../../reusables/MetaTags";
import UseMeasureMediaQuery from "../../components/hooks/UseMeasureMediaQuery";

const Buydrug = () => {
  const { isTabletWidth } = UseMeasureMediaQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 1 }));
    // isLargerThan768 ? setIsTabletWidth(true) : setIsTabletWidth(false);
  }, [dispatch]);

  return (
    <>
      {isTabletWidth ? (
        <Box as="section">
          <MetaTags
            title="Drug for Sale ~ Iwello | Talk To a Doctor Today 
For Less Than a Dollar!"
            description="Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!"
          />
          <BuyDrugs />
        </Box>
      ) : (
        <Box as="section">
          <Drugs />
        </Box>
      )}
    </>
  );
};

export default Buydrug;
