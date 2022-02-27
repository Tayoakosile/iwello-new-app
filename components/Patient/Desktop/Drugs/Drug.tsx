import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconHeart, IconStar } from "@tabler/icons";
import Image from "next/image";
import { BsCart2, BsCart4 } from "react-icons/bs";
import UseMeasureMediaQuery from "../../../hooks/UseMeasureMediaQuery";

const Drug = () => {
  const { isTabletWidth } = UseMeasureMediaQuery();
  return (
    <Box
      as="span"
      w="full"
      h="fit"
      bg="white"
      p={{ base: "14px", md: "25px" }}
      fontFamily="Roboto"
    >
      {/* Star reviews */}
      <HStack
        spacing="2px"
        as="span"
        justify="flex-end"
        fontSize={{ base: "10px", lg: "20px" }}
      >
        <Icon as={IconStar} fill="#FBBC05" strokeWidth={0} />
        <Icon as={IconStar} fill="#FBBC05" strokeWidth={0} />
        <Icon as={IconStar} fill="#FBBC05" strokeWidth={0} />
        <Icon as={IconStar} fill="#FBBC05" strokeWidth={0} />
        <Icon as={IconStar} fill="#FBBC05" strokeWidth={0} />
      </HStack>
      {/* Star reviews */}

      {/* Drug's image and Name */}
      <Stack pt="25px" direction={{ base: "column", md: "row" }}>
        <Image
          alt="Image of Drug"
          src={
            isTabletWidth ? "/img/drugs/drug.png" : "/img/drugs/drug-mobile.png"
          }
          width={isTabletWidth ? 208 : 68}
          height={isTabletWidth ? 208 : 68}
        />
        <VStack as="span" align="flex-start" spacing="3px">
          <Box as="span">
            <Heading
              as="span"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight="none"
            >
              Natures Aid Cod Liver Oil 1000mg
            </Heading>
            <Text fontSize={{ base: "12px", md: "14px" }}>
              Starlight Pharmacy
            </Text>
          </Box>
          <Box
            as="span"
            w="fit"
            h="fit"
            bg={{ base: "none", md: "#EDE9FA" }}
            px={{ md: "15px" }}
            py={{ md: "6px" }}
          >
            <Text
              as="span"
              color="brand.500"
              fontSize={{ base: "10px", md: "14px" }}
            >
              50 Remaining
            </Text>
          </Box>
        </VStack>
      </Stack>
      {/* Place Order Button */}
      <HStack pt="51px" as="span" justify="space-between">
        <Button
          minW={"74px"}
          //   leftIcon={<BsCart2 />}
          fontSize={{ base: "15px", md: "md" }}
        >
          {isTabletWidth ? "Place Order" : "Buy"}
        </Button>
        <HStack
          as="span"
          spacing={{ base: "10px", md: "20px" }}
          fontSize={{ base: "20px", md: "30px" }}
        >
          <Icon
            as={IconHeart}
            strokeWidth={1}
            color="brand.500"
            cursor="pointer"
            _active={{ transform: "scale(0.9)" }}
            _hover={{ color: "brand.700" }}
          />
          <Icon
            as={BsCart4}
            color="brand.500"
            cursor="pointer"
            _active={{ transform: "scale(0.9)" }}
            _hover={{ color: "brand.700" }}
          />
        </HStack>
      </HStack>
      {/* Place Order Button */}
    </Box>
  );
};

export default Drug;
