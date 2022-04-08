import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsTelephoneFill, BsThreeDots, BsChatLeftFill } from "react-icons/bs";
import Link from 'next/link';

const Doctor = () => {
  return (
    <Flex
      w="full"
      h="fit"
      pb="32px"
      pt="20px"
      px="20px"
      bg="white"
      flexDir="column"
    >
      {/* Doctors'Availability */}
      <HStack justify="space-between">
        <HStack as="span">
          <Box as="span" w="10px" h="10px" bg="#11E90D" rounded="full" />
          <Text as="span" fontSize="14px">
            {" "}
            Available
          </Text>
        </HStack>
        <Icon as={BsThreeDots} fontSize="24px" />
      </HStack>
      {/* Doctors'Availability */}

      <HStack pt="33px">
        <Avatar size="lg" />
        <VStack spacing="0px" align="flex-start">
          <Heading lineHeight="21.09px" fontSize="16px" as="h4">
            Doctor Adeola Sapara
          </Heading>
          <Text as="span" color="brand.500" fontSize="16px">
            General Physician
          </Text>
        </VStack>
      </HStack>
      {/* Popover Menu */}
      <Popover>
        <PopoverTrigger>
          <Button w="40%" alignSelf="flex-end" mt="36px">
            Consult
          </Button>
        </PopoverTrigger>
        {/*  */}
        <PopoverContent
          w="150px"
          boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.15) !important"
          borderRadius="10px"
        >
          <PopoverBody bg="#F5F5F5" w="full" p="20px">
            <HStack
              as="span"
              w="full"
              align="center"
              spacing="16px"
              h="full"
              justify="center"
            >
              <IconButton
                bg="white"
                aria-label="Call a doctor"
                color="brand.500"
                rounded="50% !important"
                size="lg"
                _hover={{
                  bg: "brand.100",
                  color: "brand.500",
                }}

                // colorScheme="whiteAlpha"
              >
                <BsTelephoneFill />
              </IconButton>

              <Link passHref href ='/patient/messages'>
              <IconButton
                bg="white"
                size="lg"
                aria-label="Chat with a  doctor"
                color="brand.500"
                rounded="50% !important"
                _hover={{
                  bg: "brand.100",
                  color: "brand.500",
                }}
                
              >
                <BsChatLeftFill />
              </IconButton>
              </Link>

            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* Popover Menu */}
    </Flex>
  );
};

export default Doctor;
