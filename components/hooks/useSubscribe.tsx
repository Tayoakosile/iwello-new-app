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
  const subscribedUser = (userEmailAddress: { userEmailAddress: string }) => {
    console.log(userEmailAddress);
  };
  return { register, handleSubmit, subscribedUser, errors };
};

export default useSubscribe;
