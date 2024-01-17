import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { FaSignOutAlt } from "react-icons/fa";
const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size={"sm"}
        />
      ),
      text: "Profile",
      link: "/username",
    },
  ];
  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                gap={4}
                p={2}
                alignItems={"center"}
                borderRadius={6}
                _hover={{ bg: "whiteAlpha.400" }}
                w={{ base: "10", md: "full" }}
                cursor={"pointer"}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        <Tooltip
              
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={'/auth'}
                as={RouterLink}
                gap={4}
                p={2}
                alignItems={"center"}
                borderRadius={6}
                _hover={{ bg: "whiteAlpha.400" }}
                w={{ base: "10", md: "full" }}
                cursor={"pointer"}
                justifyContent={{ base: "center", md: "flex-start" }}
                mt={'auto'}
              >
               <FaSignOutAlt size={25}/>
                <Box display={{ base: "none", md: "block" }}>Logout</Box>
              </Link>
            </Tooltip>

      </Flex>
    </Box>
  );
};

export default Sidebar;
