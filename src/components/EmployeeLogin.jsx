import { Box, Button, Container, Flex, FormControl, FormLabel, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const EmployeeLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const admins = [
    {
        user:'rajesh',
        pass:'123456'
    },
    {
        user:'demo',
        pass:'1234'
    },
    { 
        user:'abhitest',
        pass:'abhi123'

    }
  ]

  const navigate = useNavigate();

  const logger = () => {
    console.log("username: " + username + "\n" + "password :" + password);
    // Check if the password matches any of the predefined passwords
    const isValidAdmin = admins.some(admin => admin.user === username && admin.pass === password);
    if (isValidAdmin) {
      // If the password matches, redirect to the EmployeePage
      navigate('/employe');
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const backgroundImageUrl =
    "https://img.freepik.com/free-vector/gradient-style-network-connection-background_23-2148879891.jpg?w=1380&t=st=1691245334~exp=1691245934~hmac=a4c81972e0552d698003604141cc35fba0b848a9f9a6ad173e4548aa81131d76";

  return (
    <Box
      backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="xl">
        <Box
          maxH="400px"
          maxW="400px"
          bgGradient="linear-gradient(135deg, #EBF2FD, #EEF2F9, #E2E0F6)"
          borderRadius="md"
          boxShadow="md"
        >
          <VStack p={8} alignItems="center" justifyContent="center">
            <FormControl>
              <FormLabel fontSize="lg">Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg">Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <HStack spacing={10}>
              <Button variant={"outline"} colorScheme="green" onClick={handleReset}>
                Reset
              </Button>
              <Button variant={"solid"} colorScheme="red" onClick={logger}>
                Login
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
