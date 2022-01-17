import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";

// TO validate user input in contact us form
const UseContactUs = () => {
  const toast = useToast();
  // Set a mock loading state
  const [mockisLoadingState, setMockisLoadingState] = useState<boolean>(false);

  // FOrm validator
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Contains all the details of the user in the contact form
  const SubmitForm = (data: any) => {
    setMockisLoadingState(true);
    console.log("here");

    // Fake sending data to backend
    setTimeout(() => {
      setMockisLoadingState(false);
      reset({});
      toast({
        title: "Message Sent",
        description: "You would receive a reply via your email address",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
      console.log("here");
    }, 3000);
    // setTimeout((),[2000])
  };
  return {
    register,
    handleSubmit,
    SubmitForm,
    errors,
    isSubmitting,
    mockisLoadingState,
  };
};

export default UseContactUs;
