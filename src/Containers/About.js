import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import { motion } from "framer-motion";

export default function About() {
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
            marginBottom={25}
            fontWeight={500}
          >
            More about me!
          </Text>
        </Slide>

        <Box
          width={[450, 650, 850]}
          marginLeft={[1, 2, 2]}
          maxWidth={["90%", "100%", "100%"]}
        >
          <Fade bottom>
            <Text
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              From spending months as a kid trying to get minecraft to run on my
              junkyard ubuntu linux PC, to building janky pitbikes and gokarts
              in high school engineering, I've always loved tackling a good
              challenge and solving problems.
            </Text>
          </Fade>

          <Fade bottom>
            <Text
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              These days the problems I like to solve have changed a little, but
              the enjoyment is all the same. The moment when I figure out a
              smart solution to something that I've been fighting at is the best
              part of my week.
            </Text>
          </Fade>

          <Fade bottom>
            <Text
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              Outside of my budding Software Engineering career, you'll find me
              in my free time working on cars with my mates, drinking craft beer
              or having a quiet weekend at home producing music.
            </Text>
          </Fade>
        </Box>
      </Box>
    </motion.div>
  );
}
