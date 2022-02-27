import { Heading, HStack, Icon, Input } from "@chakra-ui/react";
import { BsBell, BsCart3 } from "react-icons/bs";
import Doctors from "./Doctors/Doctors";
import PatientIcons from "../../../reusables/PatientIcons";

const ConsultDoctor = () => {
  return (
    <>
      <PatientIcons text={"Speak With a Doctor"} />

      {/* Speak with a Doctor */}

      <Doctors />
      {/* Speak with a Doctor */}
    </>
  );
};

export default ConsultDoctor;
