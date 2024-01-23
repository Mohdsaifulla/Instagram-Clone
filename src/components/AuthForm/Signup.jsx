import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signup ,loading, error } = useSignInWithEmailAndPassword();
  return (
    <>
      <Input
        placeholder="Full name"
        fontSize={14}
        size={"sm"}
        type="text"
        value={input.fullName}
        onChange={(e) => setInput({ ...input, fullName: e.target.value })}
      />
      <Input
        placeholder="User name"
        fontSize={14}
        size={"sm"}
        type="text"
        value={input.username}
        onChange={(e) => setInput({ ...input, username: e.target.value })}
      />
      <Input
        placeholder="Email"
        fontSize={14}
        size={"sm"}
        type="email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <InputRightElement>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={(e) => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={()=>signup()}>
        Sign up
      </Button>
    </>
  );
};

export default Signup;
