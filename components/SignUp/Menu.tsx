import { HStack, SimpleGrid, Box, Tag, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Menu = () => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);
  return (
    <HStack
      d={{ base: "flex", lg: "none" }}
      as="section"
      w="100%"
      h="full"
      spacing="2"
      overflowX={"auto"}
      sx={{
        ".iwello__button": {
          "&:hover, &:focus": {
            boxShadow: "none !important",
          },
        },
      }}
    >
      {["Patient", "Doctor", "Dentist", "Pharmacist"].map(
        (occupation, index) => (
          <Box as="span" key={occupation}>
            <Button
              w="full"
              className="iwello__button"
              onClick={() => setButtonIndex(index)}
              mr="3"
              h="12"
              flex="0.5"
              fontSize="16px"
              variant={`${buttonIndex === index ? "solid" : "outline"}`}
              colorScheme="brand"
            >
              {occupation}
            </Button>
          </Box>
        )
      )}
    </HStack>
  );
};

export default Menu;
