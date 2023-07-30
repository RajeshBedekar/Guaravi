import { Box, Button } from "@chakra-ui/react";
import React from "react";

export const EmployeePage = () => {
  const buttonStyles = {
    width: "200px",
    height: "50px",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Button colorScheme="blue" style={buttonStyles}>
        BSNL NET
      </Button>
      <Button colorScheme="blue" style={buttonStyles}>
        CABLE
      </Button>
      <Button colorScheme="blue" style={buttonStyles}>
        OFC DATA
      </Button>
      <Button colorScheme="blue" style={buttonStyles}>
        QUOTATION
      </Button>
      <Button colorScheme="blue" style={buttonStyles}>
        INVOICE
      </Button>
      <Button colorScheme="blue" style={buttonStyles}>
        HOME
      </Button>
    </Box>
  );
};
