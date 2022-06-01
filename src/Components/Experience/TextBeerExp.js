import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { Fade } from "react-reveal";

export default function TextBeerExp() {
  return (
    <>
      <Box
        maxWidth={["95%", "100%", "100%"]}
        marginLeft={[1, 2, 2]}
        paddingBottom={65}
      >
        <Link
          href="https://www.textbeer.co.nz"
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[25, 25, 32]}
          isExternal
        >
          Beer Jerk - TextBeer <ArrowBackIcon w={6} h={6} />{" "}
        </Link>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[16, 18, 18]}
          fontWeight={600}
          marginTop={25}
        >
          Sep 2021 - Present
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[14, 18, 18]}
          marginBottom={15}
        >
          Codestack: JS, React, Nodejs/AWS
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[14, 18, 18]}
          marginBottom={45}
        >
          Development of a text messaged based marketing/ordering service with a
          Javascript/React frontend and serverless AWS backend. Agile/SCRUM
          development using Clickup. Strict Agile/SCRUM development using JIRA.
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[16, 18, 18]}
          marginBottom={15}
          fontWeight={600}
        >
          My Contributions
        </Text>

        <UnorderedList>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Taking lead on development I began signup and user details flow
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Moved onto more heavily working with backend code for AWS lambda
            functions in Node.js with serverless
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Introduced and integrated third party services, Stripe and Clicksend
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Introduced basic text message based ordering system, user replying
            yes to a text to purchase a current listed product.
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Iterated upon previous code to have more specific user friendly
            replies based on their messages, as well as helping with parsing and
            prioritizing correct spelled text messages over incorrectly spelled
            to account for typos.
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Designed and developed user friendly flow for logistics team to use,
            exporting orders to use with E-Ship and uploading the exported
            E-Ship orders to Amplify storage to automatically send tracking
            emails to users via Amazon SES
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
