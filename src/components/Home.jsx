import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { FrontPage } from "./FrontPage";
export const Home = () => {
  return (
    <Box p={0} m={0} position="relative" bgColor={"black"} color={"white"}>
      <Navbar />
      <Header />
      <FrontPage />
    </Box>
  );
};