import React from "react";
import { useForm } from "react-hook-form";

const useSubscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   User,s email address
  console.log(errors);
  const subscribedUser = (data: { data: object }) => {
    console.log(data);
  };
  return { register, handleSubmit, subscribedUser, errors };
};

export default useSubscribe;
