import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { ContactModal } from "./ContactModal";
import { HelpModal } from "./HelpModal";

export const Header = () => {
 
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);


  const handleContactModalToggle = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  
  const handleHelpModalToggle = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  return (
    <Box h={"3rem"} border={"1px solid red"}>
      <Flex
        alignItems="center"
        flexDir={"row"}
        justifyContent={"flex-end"}
        h={"100%"}
      >
        <Box mr={2}>
          <Button _hover={{ bg: "gray", color: "white" }}>Home</Button>
        </Box>
        <Box mr={2}>
          <Button
            onClick={handleContactModalToggle}
            _hover={{ bg: "gray", color: "white" }}
          >
            Contact Us
          </Button>
        </Box>
        <Box mr={2}>
          <Button _hover={{ bg: "gray", color: "white" }}>Services</Button>
        </Box>
        <Box mr={2}>
          <Button
            onClick={handleHelpModalToggle}
            _hover={{ bg: "gray", color: "white" }}
          >
            Help
          </Button>
        </Box>
      </Flex>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleContactModalToggle}
      />

      <HelpModal isOpen={isHelpModalOpen} onClose={handleHelpModalToggle} />
    </Box>
  );
};
