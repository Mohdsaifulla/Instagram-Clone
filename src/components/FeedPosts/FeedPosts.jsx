import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, id) => (
          <VStack key={id} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={'500px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      <FeedPost img="/img5.jpg" username="@rosy" avatar="/img5.jpg" />
      <FeedPost img="/img6.jpg" username="@josh" avatar="/img6.jpg" />
      <FeedPost img="/img7.jpg" username="@inoski" avatar="/img7.jpg" />
      <FeedPost img="/img8.jpg" username="@fracsis" avatar="/img8.jpg" />
    </Container>
  );
};

export default FeedPosts;
