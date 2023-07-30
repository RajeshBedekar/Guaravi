import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { HelpModal } from "./HelpModal";

export const ContactModal = ({ isOpen, onClose }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Text>Gauravi Enterprise</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text mb={3}>
                AT-Post: Poynad , Tel: Alibag, Raigad, Maharashtra
              </Text>
              <Text mb={3}>Pin Code: 402108</Text>
              <Text mb={3}>Phone Number: +91 - 7770009455 / 9422090526</Text>
              <Text mb={3}>Email: rajeshbedekar@gmail.com</Text>
              <Text>Hours: Monday - Sunday: 10:00 am - 5:30 pm</Text>
            </Box>
            <Flex mt={10} justifyContent={"center"} alignItems={"center"}>
              <Box>
                <Button onClick={()=>{handleOpenLoginModal(); onClose();}}>
                  We're here to Help!
                </Button>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <HelpModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </Box>
  );
};