import { Button, Container, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const toast = useToast()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`https://kind-gold-stingray-hat.cyclic.app/auth/register`,{name,email,password})
        .then((res)=>{
            // console.log(res)
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            navigate("/login")
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setName("")
            setEmail("")
            setPassword("")
        })
    }
  return (
    <Container maxW={"md"} p={6} boxShadow={'md'} rounded={'md'} mt={4}>
        <Heading>Signup</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" id="name" value={name} placeholder="Enter Name.." onChange={(e)=>setName(e.target.value)}/>
        <FormLabel>Email address</FormLabel>
        <Input type="email" id='email' value={email} placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
        <FormLabel>Password</FormLabel>
        <Input type="password" id="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="submit" mt={2} colorScheme="teal" onClick={handleSubmit}>Signup</Button>
      </FormControl>
    </Container>
  );
};

export default Signup;
