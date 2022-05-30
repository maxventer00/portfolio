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
import { useLocation, useNavigate } from "react-router-dom";

export default function MobileDrawer({ setDrawerOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

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
        className="navbarMobile"
        float="right"
      >
        <HamburgerIcon w={8} h={8} outline={0} />
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        setDrawerOpen={setDrawerOpen}
      >
        <VStack alignItems="left" gap={8}>
          <Text
            cursor="pointer"
            onClick={() => navigate("/home")}
            marginBottom={3}
            textAlign="center"
            fontSize={18}
            fontWeight="600"
            color={location.pathname === "/home" ? "#BBB0FF" : "white"}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            onClick={() => navigate("/about")}
            marginBottom={3}
            textAlign="center"
            fontSize={18}
            fontWeight="600"
            color={location.pathname === "/about" ? "#BBB0FF" : "white"}
          >
            About
          </Text>
          <Text
            cursor="pointer"
            onClick={() => navigate("/skills")}
            marginBottom={3}
            textAlign="center"
            fontSize={18}
            fontWeight="600"
            color={location.pathname === "/skills" ? "#BBB0FF" : "white"}
          >
            Skills
          </Text>
          <Text
            cursor="pointer"
            onClick={() => navigate("/experience")}
            marginBottom={3}
            textAlign="center"
            fontSize={18}
            fontWeight="600"
            color={location.pathname === "/experience" ? "#BBB0FF" : "white"}
          >
            Experience
          </Text>
        </VStack>
      </Drawer>
    </Box>
  );
}
