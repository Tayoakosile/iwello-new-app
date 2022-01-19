import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const useSubscribe = () => {
  const [mockisLoadingState, setMockisLoadingState] = useState<boolean>(false);
  const toast = useToast();

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   User,s email address
  console.log(errors);
  const subscribedUser = (data: any) => {
    setMockisLoadingState(true);
    setTimeout(() => {
      setMockisLoadingState(false);
      setValue("subscribedEmail", "");
      toast({
        title: "Suscribed Successfully",
        description: "You have been subscribed",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
    console.log(data);
  };
  return { register, handleSubmit, subscribedUser, errors, mockisLoadingState };
};

export default useSubscribe;
