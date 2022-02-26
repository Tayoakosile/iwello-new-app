import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import Router from "next/router";
import { signUp } from "../../stores/user";
import { confirmEmailPopup } from "../../stores/confirmemail";
import { UserSignUp } from "../../config/config";

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
  } = useForm<UserSignUp>();

  /* Confirm password === password check */
  const handleConfirmPassword = (userConfirmPassword: any) => {
    // if password and confirm password aren't the same
    if (userConfirmPassword !== getValues("password")) {
      return "Password aren't the same, please try again";
    }
  };

  const userSignUpInfo: SubmitHandler<UserSignUp> = (data) => {
    const { firstname, password, email, lastname } = data;
    setMockIsLoading(true);
    setTimeout(() => {
      setMockIsLoading(false);
      reset({});
      // SHow confirm Email dialog
      dispatch(confirmEmailPopup({ showDialog: true }));
    }, 3000);
    dispatch(signUp({ firstname, password, email, lastname }));
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
