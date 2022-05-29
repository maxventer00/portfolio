import "../App.css";
import ProfilePic from "../Images/profile.jpeg";
import { Box, Image, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import CodingVideo from "../Images/CodingVideo.mov";

export default function Profile() {
  return (
    <>
      <Box padding={[25, 35, 45]} paddingTop={35} paddingBottom={35}>
        {/* <div className="videoPlayer">
          <video loop autoPlay muted>
            <source src={CodingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <Box boxSize={[140, 190, 225]} marginTop={65}>
          <Image src={ProfilePic} borderRadius="full" />
        </Box>

        <Fade bottom>
          <Text
            fontSize={[30, 35, 40]}
            color="white"
            paddingTop={2}
            marginLeft={[1, 2, 4]}
          >
            Max Venter
          </Text>
          <Text
            fontSize={[18, 22, 25]}
            color="#BBB0FF"
            marginLeft={[1, 2, 4]}
            letterSpacing={4}
          >
            Software Engineer
          </Text>
        </Fade>
      </Box>
    </>
  );
}
