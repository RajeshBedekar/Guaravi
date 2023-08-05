import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export const EmployeeLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logger = () => {
    console.log("username: " + username + "\n" + "password :" + password);
  };
  const resetForm = () => {
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="lg">Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <HStack spacing={10}>
              <Button variant={"outline"} colorScheme="green" onClick={resetForm}>
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
