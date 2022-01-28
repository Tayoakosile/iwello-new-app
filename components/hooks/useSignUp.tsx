import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
// import {signup } from "";

import Router from "next/router";
import { signup } from "../redux/user";

const useSignUp = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [mockIsLoading, setMockIsLoading] = useState<boolean>(false);
  const {
    getValues,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Confirm password === password check */
  const handleConfirmPassword = (userConfirmPassword: string) => {
    // if password and confirm password aren't the same
    if (userConfirmPassword !== getValues("password")) {
      return "Password aren't the same, please try again";
    }
  };

  const userSignUpInfo = (data: {
    firstname: string;
    lastname: string;
    password: string;
    email: string;
  }) => {
    const { firstname, password, email, lastname } = data;
    setMockIsLoading(true);
    dispatch(signup({ firstname, password, email, lastname }));
    setTimeout(() => {
      setMockIsLoading(false);
      reset({});
      toast({
        title: "Account Created",
        description: "Redirecting.....",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          Router.push(`confirmemail/${getValues("email")}`);
        },
        variant: "left-accent",
      });
      console.log(data);
    }, 3000);
  };

  return {
    register,
    handleConfirmPassword,
    mockIsLoading,
    handleSubmit,
    errors,
    userSignUpInfo,
  };
};

export default useSignUp;
