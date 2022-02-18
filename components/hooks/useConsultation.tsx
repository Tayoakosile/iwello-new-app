import React from "react";
import { useDispatch } from "react-redux";
import {consultationPopup} from "../../stores/consultationPopup";

const useConsultation = () => {
  const dispatch = useDispatch();
  const showConsultationPopUp = () => {
    dispatch(consultationPopup({ showConsultationDialog: true }));
  };
  return { showConsultationPopUp };
};

export default useConsultation;
