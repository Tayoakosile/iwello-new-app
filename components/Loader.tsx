import React from "react";
import { Text, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedHeader = motion(Heading);
const AnimatedText = motion(Text);
const AnimateHeaderVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};
const AnimateTextVariant = {
  hidden: { opacity: 0.3 },
  show: { opacity: 1 },
};
const Loader = () => {
  return (
    <Center h="80vh">
      <AnimatedHeader
        variants={AnimateHeaderVariant}
        initial="hidden"
        animate="show"
        color="brand.500"
        letterSpacing="-3px"
        fontSize="60px !important"
      >
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          i
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          W
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          e
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          l
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          l
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          o
        </AnimatedText>
        <AnimatedText
          variants={AnimateTextVariant}
          initial="hidden"
          animate="show"
          as="span"
        >
          .
        </AnimatedText>
      </AnimatedHeader>
    </Center>
  );
};

export default Loader;
