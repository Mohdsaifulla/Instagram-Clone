import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name="francis" src="https://bit.ly/dan-abramov" alt="profile" />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "column", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>@francis</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "WhiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Post
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              144
            </Text>
            Follower
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              122
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"cente"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Francisco
          </Text>
        </Flex>
        <Text fontSize={"sm"}>Nothing To say About me</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
