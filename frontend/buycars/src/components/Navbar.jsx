import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/signup">
          <Heading size={"md"}>Signup</Heading>
        </Link>
      </Box>
      <Box>
        <Link to="/login">
          <Heading size={"md"}>Login</Heading>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
