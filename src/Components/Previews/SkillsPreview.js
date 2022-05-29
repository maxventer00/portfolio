import { Text, Box, Image, GridItem, Grid, Show } from "@chakra-ui/react";
import react from "../../Images/react.png";
import js from "../../Images/js.png";
import ts from "../../Images/ts.png";
import aws from "../../Images/aws.png";
import node from "../../Images/node.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        padding={35}
        backgroundColor="white"
        paddingTop={1}
        paddingBottom={[65, 65, 85]}
      >
        <Show above="md">
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={3}
            marginTop={75}
            marginBottom={55}
            marginLeft="auto"
            marginRight="auto"
            justifyContent="center"
          >
            <GridItem>
              <Image src={react} h={125} />
            </GridItem>
            <GridItem>
              <Image src={js} h={125} />
            </GridItem>
            <GridItem>
              <Image src={ts} h={125} />
            </GridItem>
            <GridItem>
              <Image src={aws} h={125} />
            </GridItem>
            <GridItem>
              <Image src={node} h={125} />
            </GridItem>
          </Grid>
        </Show>

        <Show below="md">
          <Grid templateColumns="repeat(3, 1fr)" gap={3} marginTop={75}>
            <GridItem>
              <Image src={react} h={85} />
            </GridItem>
            <GridItem>
              <Image src={js} h={85} />
            </GridItem>
            <GridItem>
              <Image src={ts} h={85} />
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={3} padding={25}>
            <GridItem>
              <Image src={aws} h={85} />
            </GridItem>
            <GridItem>
              <Image src={node} h={85} />
            </GridItem>
          </Grid>
        </Show>

        <Box
          cursor="pointer"
          onClick={() => navigate("/skills")}
          textAlign="center"
          paddingTop={30}
          maxH={1}
          float={["center", "center", "right"]}
        >
          <Text
            color="#120e2b"
            fontWeight="655"
            display="inline"
            marginRight="8px"
            fontSize={[16, 16, 18]}
          >
            My Skills
          </Text>
          <ArrowForwardIcon w={5} h={5} marginBottom={1} />
        </Box>
      </Box>
    </>
  );
}
