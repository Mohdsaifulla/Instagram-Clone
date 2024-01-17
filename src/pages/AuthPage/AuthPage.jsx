import React from "react";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
import ReactCarousel from "../../components/ReactCarousel/ReactCarousel";
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
        <Box display={{ base: "none", md: "block" }} position={'relative'}>
          <Image src="/img8.png" h={638} alt="phone-image" />
         <ReactCarousel/>
        </Box>
        <VStack spacing={4} align={"stretch"}>
          <AuthForm/>
          <Box textAlign={'center'}>Get the app</Box>
          <Flex gap={5} justifyContent={'center'}>
            <Image src="/playstore.png" h={'10'} alt="playstore logo"/>
            <Image src="/microsoft.png" h={'10'} alt="microsoft logo"/>
          </Flex>
        </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
