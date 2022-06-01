import { Box, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Slide } from "react-reveal";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <Box
      padding={[25, 35, 45]}
      paddingLeft={[25, 38, 55]}
      backgroundColor="white"
      paddingBottom={1}
    >
      <Slide left>
        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[18, 22, 24]}
        >
          With a love of problem-solving and thinking outside the box, the
          opportunity to work in an industry where I have the ability to always
          be learning alongside people smarter than me is where I thrive.
        </Text>
      </Slide>

      <Box
        cursor="pointer"
        onClick={() => navigate("/about")}
        textAlign="center"
        paddingTop={30}
        maxH={1}
        float={["center", "center", "right"]}
      >
        <Text
          href="/about"
          color="#120e2b"
          fontWeight="655"
          display="inline"
          marginRight="8px"
          fontSize={[16, 16, 18]}
        >
          About Me!
        </Text>
        <ArrowForwardIcon w={5} h={5} marginBottom={1} />
      </Box>
    </Box>
  );
}
