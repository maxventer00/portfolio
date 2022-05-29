import { Box, Text } from "@chakra-ui/react";
import { Fade, Slide } from "react-reveal";
import TextBeerExp from "../Components/Experience/TextBeerExp";
import BrewensteinExp from "../Components/Experience/BrewensteinExp";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.2 } }}
    >
      <Box
        padding={[25, 35, 45]}
        paddingLeft={[25, 38, 55]}
        backgroundColor="white"
        paddingBottom={1}
      >
        <Slide left>
          <Text
            fontSize={[25, 25, 32]}
            color="#BBB0FF"
            marginLeft={[1, 2, 2]}
            letterSpacing={4}
            fontWeight={500}
          >
            My Experience
          </Text>
          <Text
            fontSize={[25, 25, 32]}
            color="#BBB0FF"
            marginLeft={[1, 2, 2]}
            letterSpacing={4}
            marginBottom={25}
            fontWeight={500}
          >
            (So far...)
          </Text>
        </Slide>

        <Box maxWidth={["95%", "100%", "100%"]} marginLeft={[1, 2, 2]}>
          <Fade bottom>
            <Text
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              I've had the absolute pleasure of working alongside some extremely
              talented individuals at a couple of startups, many of who have
              become great friends and mentors. I can confidently say without
              these projects and colleagues i wouldn't be half the developer I
              am today.
            </Text>
          </Fade>
        </Box>

        <Fade bottom>
          <TextBeerExp />
        </Fade>

        <Fade bottom>
          <BrewensteinExp />
        </Fade>
      </Box>
    </motion.div>
  );
}
