import {
  Box,
  Text,
  VStack,
  Image,
  GridItem,
  Grid,
  Show,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import Navbar from "../Components/Navbar/Navbar";
import Profile from "../Components/Profile";
import react from "../Images/react.svg";
import js from "../Images/js.svg";
import ts from "../Images/ts.svg";
import aws from "../Images/aws.png";
import node from "../Images/node.svg";
import mongodb from "../Images/mongodb.svg";
import firebase from "../Images/firebase.svg";
import sql from "../Images/sql.jpeg";
import { motion } from "framer-motion";

export default function Skills() {
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
            Why I'm your guy?
          </Text>
        </Slide>

        <Show above="lg">
          <Grid
            float="right"
            templateColumns="repeat(2, 1fr)"
            gap={9}
            marginLeft="auto"
            marginRight="auto"
            justifyContent="center"
            marginTop={25}
          >
            <GridItem>
              <VStack float="right">
                <a
                  href={"https://reactjs.org/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={react} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://www.javascript.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={js} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://www.typescriptlang.org/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ts} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://nodejs.org/en/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={node} h={125} paddingBottom={45} />
                </a>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack float="left" marginRight={85}>
                <a
                  href={"https://aws.amazon.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={aws} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://www.mongodb.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={mongodb} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://firebase.google.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={firebase} h={125} paddingBottom={45} />
                </a>
                <a
                  href={"https://en.wikipedia.org/wiki/SQL"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={sql} h={125} paddingBottom={45} />
                </a>
              </VStack>
            </GridItem>
          </Grid>
        </Show>

        <UnorderedList
          marginLeft={[6, 7, 7]}
          maxWidth={["95%", "100%", "100%"]}
        >
          <Fade bottom>
            <ListItem
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              1.5 years experience to date working heavily with
              Javascript/Typescript, React, Node.js. During the course of this
              experience have worked with modern front-end react libraries such
              as ChakraUI and MaterialUI.
            </ListItem>
          </Fade>

          <Fade bottom>
            <ListItem
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              8 months experience to date working heavily with AWS Cloud
              services + Serverless framework. Comfortable building and
              deploying lambda functions, configuring API gateways as well as
              handling amplify backend project configuration working with
              services such as Cognito, S3 + GraphQL, SES/SNS, DynamoDB.
            </ListItem>
          </Fade>

          <Fade bottom>
            <ListItem
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              Comfortable working with and integrating third-party APIs via
              Node.js/AWS such as Clicksend and Stripe.
            </ListItem>
          </Fade>

          <Fade bottom>
            <ListItem
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              Good level of experience with SQL, MongoDB, Java, and Firebase
              through university projects as well as a bit of PHP, C# and C+.
            </ListItem>
          </Fade>

          <Fade bottom>
            <ListItem
              color="#120e2b"
              letterSpacing={1}
              lineHeight={[2, 2, 1.5]}
              fontSize={[14, 18, 18]}
              marginBottom={45}
            >
              Great team skills and communication. Have worked in tight-knit,
              committed teams all through my work experience and university
              projects. Have also taken on the role of SCRUM master in multiple
              university teams and have good experience with project management
              tools such as JIRA, Trello and Clickup.
            </ListItem>
          </Fade>
        </UnorderedList>
      </Box>
    </motion.div>
  );
}
