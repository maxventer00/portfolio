import { Box, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import LightSpeed from "react-reveal/LightSpeed";

export default function Experience() {
  return (
    <>
      <Box padding={35} backgroundColor="#120e2b" height="155">
        <LightSpeed right>
          <Box textAlign="center" paddingTop={30} maxH={1}>
            <Text
              color="white"
              fontWeight="655"
              display="inline"
              marginRight="8px"
              fontSize={[16, 16, 18]}
            >
              My Experience
            </Text>
            <ArrowForwardIcon w={5} h={5} marginBottom={1} color="white" />
          </Box>
        </LightSpeed>
      </Box>
    </>
  );
}
