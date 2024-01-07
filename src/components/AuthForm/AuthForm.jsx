import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [input,setInput]=useState({
    email:'',
    password:'',
    confirmPassword:'',
  })
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"} 
            alt="Instagram-image"
          />
          <Input placeholder="Email" fontSize={14} type="email" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
          <Input placeholder="Password" fontSize={14} type="password" value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}/>
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={input.confirmPassword} onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}/>
            
          ) : null}
          <Button onClick={handleAuth} w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <Image src="/google.png" w={5} alt="Google logo"/>
           <Text mx={2} color={'blue.500'}>Log in with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin?"Don't have account?":"Already have an account"}
          </Box>
          <Box onClick={()=>setIsLogin(!isLogin)} mx={2} fontSize={14} color={'blue.500'} cursor={'pointer'}>
            {isLogin?'Sign Up':"Log in"}
          </Box>

        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
