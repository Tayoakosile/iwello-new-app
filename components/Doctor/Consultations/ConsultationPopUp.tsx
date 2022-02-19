import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Box,
  VStack,
  Heading,
  Text,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../stores/reduxstore";
import useConsultation from "../../hooks/useConsultation";

const ConsultationPopUp = () => {
  const { showConsultationPopUp } = useConsultation();
  const dispatch = useDispatch();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { showConsultationDialog } = useSelector(
    (state: RootState) => state.consultation.value
  );

  return (
    <div>
      {" "}
      <AlertDialog
        isOpen={showConsultationDialog}
        blockScrollOnMount
        closeOnOverlayClick={true}
        isCentered
        size="lg"
        leastDestructiveRef={cancelRef}
        onClose={showConsultationPopUp}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            borderTop="20px solid #6d40e5"
            py="4"
            h="fit"
            w="90%"
          >
            <AlertDialogBody textAlign="center">
              <VStack spacing="4">
                <VStack spacing="0" as="span">
                  <Avatar name="Segun Odegbami" mb="2" size="lg" />
                  <Heading fontSize="18px" fontWeight="700">
                    Segun Odegbami
                  </Heading>

                  <Text as="span" fontSize="14px" color="red">
                    Called on Monday, 12:30pm
                  </Text>
                </VStack>

                <Text w="90%">
                  I have had a slight headache and fever for the last 3 days. I
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  took paracetamol and felt a little relief but it keeps coming
                  back. Can you help?
                </Text>
              </VStack>
            </AlertDialogBody>

            <AlertDialogFooter as="div" justifyContent="space-between" w="full">
              <Button flex="0.47" h="50px" fontSize="18px">
                Call
              </Button>

              <Link passHref href="/doctor/message">
                <Button variant="outline" h="50px" flex="0.47" fontSize="18px">
                  Message
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default ConsultationPopUp;
