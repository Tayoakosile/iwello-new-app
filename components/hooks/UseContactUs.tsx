import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// TO validate user input in contact us form
const UseContactUs = () => {
  // Shows success or error toast
  const toast = useToast();
  // Set a mock loading state /False request to server
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

    // Fake sending data to backend
    setTimeout(() => {
      setMockisLoadingState(false);
      toast({
        title: "Message Sent",
        description: "You would receive a reply via your email address",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
  reset({ name: "", email: "", message: "" });

    }, 3000);

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
