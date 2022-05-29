import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import Drawer from "./Drawer";
import React, { useState, useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

export default function MobileDrawer({ setDrawerOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const btnRef = useRef();

  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={() => {
          onOpen();
          setDrawerOpen(true);
        }}
        backgroundColor="transparent"
        variant="ghost"
        className="navbarMobile"
        float="right"
      >
        <HamburgerIcon w={8} h={8} />
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        setDrawerOpen={setDrawerOpen}
      >
        <VStack alignItems="left">
          <Link href="/" textDecoration="none">
            <Text
              marginBottom={3}
              textAlign="center"
              fontSize={18}
              fontWeight="600"
              color={location.pathname === "/" ? "#BBB0FF" : "white"}
            >
              Home
            </Text>
          </Link>
          <Link href="/about" textDecoration="none">
            <Text
              marginBottom={3}
              textAlign="center"
              fontSize={18}
              fontWeight="600"
              color={location.pathname === "/about" ? "#BBB0FF" : "white"}
            >
              About
            </Text>
          </Link>
          <Link href="/skills" textDecoration="none">
            <Text
              marginBottom={3}
              textAlign="center"
              fontSize={18}
              fontWeight="600"
              color={location.pathname === "/skills" ? "#BBB0FF" : "white"}
            >
              Skills
            </Text>
          </Link>
          <Link href="/experience" textDecoration="none">
            <Text
              marginBottom={3}
              textAlign="center"
              fontSize={18}
              fontWeight="600"
              color={location.pathname === "/experience" ? "#BBB0FF" : "white"}
            >
              Experience
            </Text>
          </Link>
        </VStack>
      </Drawer>
    </Box>
  );
}
