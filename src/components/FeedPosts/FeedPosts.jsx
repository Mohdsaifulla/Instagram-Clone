import { Container } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container>
      <FeedPost img="/img5.jpg" username="@rosy" avatar="/img5.jpg" />
      <FeedPost img="/img6.jpg" username="@josh" avatar="/img6.jpg" />
      <FeedPost img="/img7.jpg" username="@inoski" avatar="/img7.jpg" />
      <FeedPost img="/img8.jpg" username="@fracsis" avatar="/img8.jpg" />
    </Container>
  );
};

export default FeedPosts;
