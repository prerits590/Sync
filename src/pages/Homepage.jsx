"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineMore,
  AiOutlinePhone,
} from "react-icons/ai";
import ChatItem from "../components/ChatItem";
import ChatItem1 from "../components/ChatItem1";
export default function Navbar() {
  const { isOpen } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>SYNK</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Log Out
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}></Stack>
          </Box>
        ) : null}
      </Box>

      <Box
        className="border grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 h-screen "
        p={5}
      >
        <Box className="border p-4 col-span-1">
          <Text>People</Text>
          <Box className="border py-4">
            <Box className="flex items-center">
              <Box w={"fit-content"} h={"fit-content"} className="border ">
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </Box>
              <Box h={"fit-content"} className="border w-full">
                <Text>Selena</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border py-4">
            <Box className="flex items-center">
              <Box w={"fit-content"} h={"fit-content"} className="border ">
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </Box>
              <Box h={"fit-content"} className="border w-full">
                <Text>Selena</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border py-4">
            <Box className="flex items-center">
              <Box w={"fit-content"} h={"fit-content"} className="border ">
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </Box>
              <Box h={"fit-content"} className="border w-full">
                <Text>Selena</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border py-4">
            <Box className="flex items-center">
              <Box w={"fit-content"} h={"fit-content"} className="border ">
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </Box>
              <Box h={"fit-content"} className="border w-full">
                <Text>Selena</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box maxH={"100vh"} overflowY={"scroll"} className="border col-span-2 ">
          <Box className="border flex items-center justify-between py-3 z bg-slate-50 w-full">
            <Box className="border">
              <Avatar
                size={"md"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </Box>
            <Box className="flex border justify-end">
              <Box>
                <AiOutlineHome fontSize={"1.8rem"} />
              </Box>
              <Box>
                <AiOutlinePhone fontSize={"1.8rem"} />
              </Box>
              <Box>
                <AiOutlineMore fontSize={"1.8rem"} />
              </Box>
            </Box>
          </Box>
          {/* <Box className="text-message">
            <Box className="message-box">
              <Box
                maxWidth={"40%"}
                w={"fit-content"}
                className=" text-box px-4 "
              >
                <Box className="px-4 py-3 my-1 text-box1 rounded-full border">
                  <Text>Heyyyyyyyyyyyyy</Text>
                </Box>
              </Box>
            </Box>
          </Box> */}
          <Box className="border message-box">
           <ChatItem/>
           <ChatItem1/>
           <ChatItem/>
           <ChatItem1/>
           <ChatItem/>
           <ChatItem1/>

          </Box>
        </Box>
      </Box>
    </>
  );
}
