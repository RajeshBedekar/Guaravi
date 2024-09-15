import { Box, Button, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const colorScheme = "blue";

export const FrontPage = () => {
  const boxWidth = useBreakpointValue({ base: "100%", sm: "20%" });
  const fontSize = useBreakpointValue({ base: "xl", sm: "2xl" });
  const navigate = useNavigate();
  return (
    <Box>
      <Box border="1px solid blue" h="82.5vh" w={boxWidth}>
        <Box pt={120}>
          <Box pl={5} pb={5}>
            <Box pb={5}>
              <Button onClick={()=>{
                navigate("/customer")
              }} colorScheme="green" fontSize={fontSize} fontWeight="bold">
                Cable TV
              </Button>
            </Box>
            <Box>
              <Button
                colorScheme={colorScheme}
                fontSize={fontSize}
                fontWeight="bold"
              >
                BSNL FTTH INTERNET
              </Button>
            </Box>
          </Box>
          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              DG SERVICE
            </Button>
          </Box>
          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              WIFI 'P' TO 'P' LINK
            </Button>
          </Box>
          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              Electric Works
            </Button>
          </Box>

          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              FRP WORKS
            </Button>
          </Box>
          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              Fiber Optic Maintenance
            </Button>
          </Box>
          <Box pl={5} pb={5}>
            <Button
              colorScheme={colorScheme}
              fontSize={fontSize}
              fontWeight="bold"
            >
              Intercom Maintenance
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
