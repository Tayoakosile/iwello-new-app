import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmEmailPopup } from "../../stores/confirmemail";
import { RootState } from "../../stores/reduxstore";
import IwelloLogo from "../../reusables/IwelloLogo";

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
          <AlertDialogContent h="fit" py="10" w="90%">
            <IwelloLogo />
            <AlertDialogBody textAlign="center" pt="33">
              <Heading fontSize="24px">
                Please confirm your email address
              </Heading>
              <Text pt="4" fontSize="16px" pb='2'>
                A confirmatory mail has been sent to:
              </Text>
              <Text
                as="span"
                color="brand.500"
                fontWeight="bold"
                fontSize="16px"
              >
                example@gmail.com
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter as="div" justifyContent="center" w="full">
              <Link passHref href="/login">
                <Button onClick={onClose} w="149px" h="60px">
                  Login
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConfirmEmailPopup;
