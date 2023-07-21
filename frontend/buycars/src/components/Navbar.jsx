import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/auth.action";

const Navbar = () => {
  const state = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const toast = useToast()
    console.log(state)

    const handleLogout = ()=>{
      dispatch(logout())
      localStorage.removeItem("token")
      toast({
        title: `Logout Successful`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  return (
    <Flex justify={"space-around"} boxShadow='md' p='6' rounded='md' bg='white'>
      <Box>
        <Link to="/">
          <Heading size={"md"}>Home</Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/oem">
          <Heading size={"md"}>OEM Specs</Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/dealerinventory">
          <Heading size={"md"}>Dealer's Inventory</Heading>
        </Link>
      </Box>
      <Box>
        {
          state.isAuth ? <Heading size={"md"}>Hello, {state.name}</Heading> : <Link to="/signup">
          <Heading size={"md"}>Signup</Heading>
        </Link>
        }
        
      </Box>
      <Box>
      {
          state.isAuth ? <Button onClick={handleLogout}>Logout</Button>  : <Link to="/signup">
          <Heading size={"md"}>Login</Heading>
        </Link>
        }
        {/* <Link to="/login">
          <Heading size={"md"}>Login</Heading>
        </Link> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
