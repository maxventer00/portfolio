import React, { useState, useEffect } from "react";
import { Box, Text, Link, HStack, Show } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import MobileDrawer from "./NavbarDrawer";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();

  const scrollCheck = () => {
    var initial = 0;

    window.addEventListener("scroll", function (e) {
      var newValue = window.pageYOffset - 1;

      if (initial - newValue < 0) {
        setScrollDirection("down");
      } else if (initial - newValue > 0) {
        setScrollDirection("up");
      }

      initial = newValue;
    });
  };

  useEffect(() => {
    scrollCheck();
  }, []);

  return (
    <>
      {scrollDirection === "up" ? (
        <Box
          w="100%"
          height="80px"
          p={4}
          paddingRight={2}
          color="white"
          backgroundImage="linear-gradient(to bottom, rgba(15,15,15,1), #120e2b);"
          position="fixed"
          zIndex={isDrawerOpen ? 0 : 1}
        >
          <Show above="md">
            <HStack
              className="navbarDesktop"
              as="nav"
              spacing="35"
              float="right"
              marginRight="35px"
            >
              <Link href="/" textDecoration="none">
                <Text
                  fontSize={18}
                  fontWeight="600"
                  color={location.pathname === "/" ? "#BBB0FF" : "white"}
                >
                  Home
                </Text>
              </Link>

              <Link href="/about" textDecoration="none">
                <Text
                  fontSize={18}
                  fontWeight="600"
                  color={location.pathname === "/home" ? "#BBB0FF" : "white"}
                >
                  About
                </Text>
              </Link>

              <Link href="/skills" textDecoration="none">
                <Text
                  fontSize={18}
                  fontWeight="600"
                  color={location.pathname === "/home" ? "#BBB0FF" : "white"}
                >
                  Skills
                </Text>
              </Link>

              <Link href="/experience" textDecoration="none">
                <Text
                  fontSize={18}
                  fontWeight="600"
                  color={location.pathname === "/home" ? "#BBB0FF" : "white"}
                >
                  Experience
                </Text>
              </Link>
            </HStack>
          </Show>

          <Show below="sm">
            <HStack float="right">
              <MobileDrawer
                setDrawerOpen={setDrawerOpen}
                isDrawerOpen={isDrawerOpen}
              />
            </HStack>
          </Show>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
