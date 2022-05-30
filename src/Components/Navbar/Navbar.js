import React, { useState, useEffect } from "react";
import { Box, Text, Link, HStack, Show } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import MobileDrawer from "./NavbarDrawer";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollCheck = () => {
    var initial = 0;

    window.addEventListener("scroll", function (e) {
      var newValue = window.pageYOffset - 1;

      if (initial - newValue < 0) {
        setScrollDirection("down");
      } else if (initial - newValue > 0) {
        setScrollDirection("up");
      }

      if (newValue < 0) {
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
          backgroundImage="linear-gradient(to bottom, rgba(15,15,15,.5), rgba(18, 14, 43, .2));"
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
              gap={9}
              marginTop="15px"
            >
              <Text
                cursor="pointer"
                onClick={() => navigate("/home")}
                fontSize={18}
                fontWeight="600"
                color={location.pathname === "/home" ? "#BBB0FF" : "white"}
              >
                Home
              </Text>

              <Text
                cursor="pointer"
                onClick={() => navigate("/about")}
                fontSize={18}
                fontWeight="600"
                color={location.pathname === "/about" ? "#BBB0FF" : "white"}
              >
                About
              </Text>

              <Text
                cursor="pointer"
                onClick={() => navigate("/skills")}
                fontSize={18}
                fontWeight="600"
                color={location.pathname === "/skills" ? "#BBB0FF" : "white"}
              >
                Skills
              </Text>

              <Text
                cursor="pointer"
                onClick={() => navigate("/experience")}
                fontSize={18}
                fontWeight="600"
                color={
                  location.pathname === "/experience" ? "#BBB0FF" : "white"
                }
              >
                Experience
              </Text>
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
