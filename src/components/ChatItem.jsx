import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function ChatItem() {
  return (
    <Box className="border">
      <Box className="text-message ">
        <Box maxWidth={"40%"} w={"fit-content"} className=" text-box px-4 ">
          <Box className="px-4 py-3 my-1 text-boxx rounded-full border">
            <Text>Heyyyyyyyyyyyyy</Text>
          </Box>
        </Box>
      </Box>
      <Box className="time-stamp">
        <Text>Today at 4:40pm</Text>
      </Box>
    </Box>
  );
}
