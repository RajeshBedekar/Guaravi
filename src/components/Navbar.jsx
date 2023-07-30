import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { LoginModal } from "./LoginModal";

export const Navbar = () => {
  const baseFontSize = "xl"; // mobiles
  const mdFontSize = "3xl"; // mid screens
  const lgFontSize = "4xl"; // large screens

  const fontSize = useBreakpointValue({
    base: baseFontSize,
    md: mdFontSize,
    lg: lgFontSize,
  });

  // State to handle the login modal visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to toggle the login modal
  const handleLoginModalToggle = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <Box border="1px solid gray" h="7rem">
      <Flex alignItems="center" justifyContent="space-between" h="100%">
        <Box pl={1}>
          <Box p={2}>
            <Image
              h={"100px"}
              objectFit={"cover"}
              src="https://ik.imagekit.io/xn8n0xwtf/logo.png?updatedAt=1690568163968"
              alt="ShreeLOGO"
            ></Image>
          </Box>
        </Box>
        <Box>
          <Box p={2}>
            <Text fontSize={fontSize} fontWeight="bold" textAlign="center">
              GAURAVI ENTERPRISE
            </Text>
          </Box>
        </Box>
        <Box pr={1}>
          <Button onClick={handleLoginModalToggle} colorScheme="linkedin">
            Login
          </Button>
        </Box>
      </Flex>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalToggle} />
    </Box>
  );
};
