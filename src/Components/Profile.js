import "../App.css";
import ProfilePic from "../Images/profile.jpeg";
import { Box, Image, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <Box padding={[25, 35, 45]} paddingTop={35} paddingBottom={35}>
        <Box
          boxSize={[140, 190, 225]}
          marginTop={65}
          onClick={() => navigate("/")}
          cursor="pointer"
        >
          <Image src={ProfilePic} borderRadius="full" />
        </Box>

        <Fade bottom>
          <Text
            fontSize={[30, 35, 40]}
            color="white"
            paddingTop={2}
            marginLeft={[1, 2, 4]}
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            Max Venter
          </Text>
          <Text
            fontSize={[18, 22, 25]}
            color="#BBB0FF"
            marginLeft={[1, 2, 4]}
            letterSpacing={4}
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            Software Engineer
          </Text>
        </Fade>
      </Box>
    </>
  );
}
