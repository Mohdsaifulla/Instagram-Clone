import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name='ruki' followers={2343} avatar='https://bit.ly/prosper-baba'/>
      <SuggestedUser name='ruki' followers={2343} avatar='https://bit.ly/prosper-baba'/>
      <SuggestedUser name='ruki' followers={2343} avatar='https://bit.ly/prosper-baba'/>
      <SuggestedUser name='ruki' followers={2343} avatar='https://bit.ly/prosper-baba'/>
      <Box>
        &copy;2024
        <Link
          href="https://twitter.com/__s_aif__"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
          px={2}
        >
          @Saif
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
