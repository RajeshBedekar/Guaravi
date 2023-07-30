import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Button,
  Flex,
  FormLabel,
  FormHelperText,
  Input,
  FormControl,
} from "@chakra-ui/react";

export const HelpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Text>Gauravi Enterprise</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText mb={2}>
              We'll never share your email.
            </FormHelperText>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" />
            <FormLabel>Complaints</FormLabel>
            <Input type="text" />
          </FormControl>
          <Flex mt={10} justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Button onClick={onClose}>Save</Button>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};