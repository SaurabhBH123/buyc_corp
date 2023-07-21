import { Button, Container, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/auth.action';

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const state = useSelector((state)=>state.auth)
    // console.log(state)

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`https://kind-gold-stingray-hat.cyclic.app/auth/login`,{email,password})
        .then((res)=>{
            // console.log(res)
            dispatch(login(res.data.name))
            toast({
                title: `${res.data.msg}`,
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              localStorage.setItem("token",res.data.token)
            navigate("/dealerinventory")
        })
        .catch((err)=>{
            toast({
                title: `Login Failed!`,
                description: `${err.response.data.msg}`,
                status: 'error',
                isClosable: true,
            })
            console.log(err)
        })
        .finally(()=>{
            setEmail("")
            setPassword("")
        })
    }
  return (
    <Container maxW={"md"} p={6} boxShadow={'md'} rounded={'md'} mt={4}>
        <Heading>Login</Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" id='email' value={email} placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
        <FormLabel>Password</FormLabel>
        <Input type="password" id="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="submit" mt={2} colorScheme="teal" onClick={handleSubmit}>Login</Button>
      </FormControl>
    </Container>
  )
}

export default Login