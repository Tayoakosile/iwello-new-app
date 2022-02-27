import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPatientPageIndex } from "../../stores/patientPageIndex";

const Buydrug = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPatientPageIndex({ index: 1 }));
  }, [dispatch]);
  return <div>buydrug</div>;
};

export default Buydrug;
