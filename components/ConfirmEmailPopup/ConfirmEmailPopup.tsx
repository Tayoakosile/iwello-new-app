import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../stores/reduxstore";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { confirmEmailPopup } from "../../stores/confirmemail";

const ConfirmEmailPopup = () => {
  const dispatch = useDispatch();

  const { showDialog: showConfirmEmailPopUp } = useSelector(
    (state: RootState) => state.confirmEmail.value
  );
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClose = () => {
    dispatch(confirmEmailPopup({ showDialog: true }));
  };

  const cancelRef = React.useRef();
  return (
    <>
      <AlertDialog
        isOpen={showConfirmEmailPopUp}
        blockScrollOnMount
        closeOnOverlayClick={false}
        isCentered
        size="lg"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="red " h="fit" py="12" w="90%">
            <AlertDialogBody textAlign="center">
              <Heading fontSize="24px">
                Please confirm your email address
              </Heading>
              <Text fontSize="16px">A confirmatory mail has been sent to</Text>
              <Text fontSize="16px">example@gmail.com</Text>
            </AlertDialogBody>

            <AlertDialogFooter as="span" align="center">
              <Button w="149px" h="60px" ref={cancelRef}>
                Login
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConfirmEmailPopup;
