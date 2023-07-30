import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const FrontPage = () => {
  const boxWidth = useBreakpointValue({ base: "100%", sm: "20%" });
  const fontSize = useBreakpointValue({ base: "xl", sm: "2xl" });

  return (
    <Box>
      <Box border="1px solid blue" h="82.5vh" w={boxWidth}>
        <Box pt={120}>
          <Box pl={5} pb={5}>
            <Box>
              <Text fontSize={fontSize} fontWeight="bold">
                BSNL FTTH INTERNET
              </Text>
            </Box>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              DG SERVICE
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              WIFI 'P' TO 'P' LINK
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              Electric Works
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              Cable TV
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              FRP WORKS
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              Fiber Optic Maintenance
            </Text>
          </Box>
          <Box pl={5} pb={5}>
            <Text fontSize={fontSize} fontWeight="bold">
              Intercom Maintenance
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
