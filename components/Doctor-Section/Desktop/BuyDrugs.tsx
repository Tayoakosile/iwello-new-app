import React from "react";
import PatientIcons from "../../../reusables/PatientIcons";
import Drugs from "./Drugs/Drugs";

const BuyDrugs = () => {
  return (
    <>
      <PatientIcons text={"Buy Drugs"} />
      <Drugs />
    </>
  );
};

export default BuyDrugs;
