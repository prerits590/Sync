import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function ChatItem1() {
  return (
    <Box className="border ">
      <Box className="text-message1 ">
        <Box maxWidth={"40%"} w={"fit-content"} className=" text-box1 px-4 ">
          <Box className="px-4 py-3 my-1 text-boxx1 rounded-full border">
            <Text>Heyyyyyyyyyyyyy</Text>
          </Box>
        </Box>
      </Box>
      <Box className="time-stamp1">
        <Text>Today at 4:40pm</Text>
      </Box>
    </Box>
  );
}
