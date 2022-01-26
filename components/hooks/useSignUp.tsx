import { useForm } from "react-hook-form";
import { useState } from "react";

const useSignUp = () => {
  const [userPassword, setUserPassword] = useState<string>("");
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Confirm password === password check */
  const handleConfirmPassword = (userConfirmPassword: string) => {
    // if password and confirm password aren't the same
    if (userConfirmPassword !== userPassword) {
      return "Password aren't the same, please try again";
    }
  };

  const userSignUpInfo = (data: {}) => {
    console.log(data);
  };

  return {
    register,
    handleConfirmPassword,
    setUserPassword,
    handleSubmit,
    errors,
    userSignUpInfo,
  };
};

export default useSignUp;
