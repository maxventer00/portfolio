import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function TextBeerExp() {
  return (
    <>
      <Box maxWidth={["95%", "100%", "100%"]} marginLeft={[1, 2, 2]}>
        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[25, 25, 32]}
          marginBottom={25}
        >
          Brewenstein
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[16, 18, 18]}
          fontWeight={600}
        >
          Dec 2020 - Sep 2021 · 10 mos
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[14, 18, 18]}
          marginBottom={15}
        >
          Codestack: TS, React, Java/SOAP
        </Text>

        <Text
          color="#120e2b"
          letterSpacing={1}
          lineHeight={[2, 2, 1.5]}
          fontSize={[14, 18, 18]}
          marginBottom={45}
        >
          Development of a web app, designed to guide users into the world of
          craft beer home brewing. Complex user flows, cart management, in-app
          guided tutorials and smooth fluid designs. Strict Agile/SCRUM
          development using JIRA.
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
            Began interning to start learning about Javascript/React, Initially
            solving design conformance issues and learning about the codestack -
            Typescript, React, ChakraUI, Java/SOAP backend.
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Moved on to functionality based user stories at the beginning of
            January and spent a lot of time working on design. All designs and
            flows were on figma, pixel perfect design conformance was followed
            aided with design reviews
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            After the lead developer on the project was let go, I offered to
            step up into the role of lead front-end development in the
            intermediary time period with the help of another intern developer
            that also joined the project.
          </ListItem>
          <ListItem
            color="#120e2b"
            letterSpacing={1}
            lineHeight={[2, 2, 1.5]}
            fontSize={[14, 18, 18]}
          >
            Handled lead front-end development until September 2021 when the
            project was coming to a close due to scope-creep/business decisions.
            Working on coding complex user flows and integration with our
            backend as well as third party services and integration such as
            google's location API, google analytics, and Stripes payment API
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
