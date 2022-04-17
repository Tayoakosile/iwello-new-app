import { useEffect, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import UseMeasureMediaQuery from "../../components/hooks/UseMeasureMediaQuery";
import { setPatientPageIndex } from "../../stores/patientPageIndex";
import PatientHistory from "../../components/Patient-Section/Desktop/PatientHistory";
import PatientIcon from "../../reusables/PatientIcons";

const History = () => {
  const { isTabletWidth } = UseMeasureMediaQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 3 }));
    // isLargerThan768 ? setIsTabletWidth(true) : setIsTabletWidth(false);
  }, [dispatch]);

  return (
    <>
      <PatientIcon
        text="History"
        additionalText="Keep track of previous consultations"
      />

      {isTabletWidth ? <PatientHistory /> : <PatientHistory />}
    </>
  );
};

export default History;
