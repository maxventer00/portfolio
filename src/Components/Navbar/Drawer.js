import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

export default function DrawerExample({
  p = 15,
  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer,
  setDrawerOpen,
}) {
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          alignItems="center"
          backgroundColor="rgb(18, 14, 43, .7)"
          backdropFilter="blur(8px)"
          paddingTop="90px"
        >
          <DrawerCloseButton
            alignSelf="end"
            mx={p}
            my={p}
            marginTop="15px"
            marginBottom="25px"
            onClick={() => setDrawerOpen(false)}
            color="white"
          />
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
