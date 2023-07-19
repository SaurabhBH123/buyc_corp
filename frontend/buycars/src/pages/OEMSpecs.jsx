import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOem } from "../redux/oem/oem.action";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

const OEMSpecs = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.oem);
  const [query, setQuery] = useState("");
  const [orderByPrice, setOrderByPrice] = useState("");
  const [orderByMil, setOrderByMil] = useState("");
  //   console.log(state.oem)

  const getData = (query='', orderByMil='', orderByPrice='') => {
    axios
      .get(
        `https://kind-gold-stingray-hat.cyclic.app/oem?modelName=${query}&orderByPrice=${orderByPrice}&orderByMil=${orderByMil}`
      )
      .then((res) => {
        dispatch(getOem(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData(query, orderByMil, orderByPrice);
  }, [query, orderByMil, orderByPrice]);
  return (
    <>
      <Heading mt={4}>Welcome To OEM Specs Page</Heading>
      <HStack justifyContent={"center"} mt={4} padding={4}>
        <Input
        //   htmlSize={20}
          width={"auto"}
          type="text"
          value={query}
          placeholder="Search Model Name Here.."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Select
        //   htmlSize={20}
          width={"auto"}
          value={orderByPrice}
          placeholder="Sort By ListPrice"
          onChange={(e) => setOrderByPrice(e.target.value)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
        <Select
        //   htmlSize={20}
          width={"auto"}
          value={orderByMil}
          placeholder="Sort By Mileage"
          onChange={(e) => setOrderByMil(e.target.value)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
      </HStack>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={6}>
        {state.oem?.map((item) => {
          return (
            <GridItem w="100%" key={item._id} boxShadow={"md"} p={6}>
              <Heading size={"md"}>Model: {item.modelName}</Heading>
              <Text>Year: {item.year}</Text>
              <Text>List Price: {item.listPrice}</Text>
              <Text>Max Speed: {item.maxSpeed}</Text>

              <HStack justifyContent={"center"}>
                <Text>Colors:</Text>
                {item.colors.map((color, index) => {
                  return (
                    <Box
                      key={index}
                      width="20px"
                      height="20px"
                      borderRadius="50%"
                      bg={color}
                    ></Box>
                  );
                })}
              </HStack>

              <Text>Power in BHP: {item.power_bhp}</Text>
              <Text>Mileage: {item.mileage}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default OEMSpecs;
