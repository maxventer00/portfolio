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
        <DrawerContent alignItems="center" backgroundColor="#120e2b">
          <Text
            color="white"
            marginBottom="30px"
            marginTop="30px"
            fontSize="40px"
            textAlign="center"
          >
            Max Venter
          </Text>
          <DrawerCloseButton
            alignSelf="end"
            mx={p}
            my={p}
            marginTop="15px"
            marginBottom="25px"
            onClick={() => setDrawerOpen(false)}
          />
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
