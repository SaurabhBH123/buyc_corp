import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/inventory/inventory.action";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const MarketPlaceInventory = () => {
  const state = useSelector((state) => state.inventory);
  const [query, setQuery] = useState("");
  const [orderByPrice, setOrderByPrice] = useState("");
  const [orderByKms, setOrderByKms] = useState("");
  const dispatch = useDispatch();

  const getInventoryData = (query,orderByKms,orderByPrice) => {
    axios
      .get(`http://localhost:8080/inventory/getAll?modelName=${query}&orderByKms=${orderByKms}&orderByPrice=${orderByPrice}`)
      .then((res) => {
        dispatch(getData(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInventoryData(query,orderByKms,orderByPrice);
  }, [query,orderByKms,orderByPrice]);
  return (
    <>
      <Heading mt={4}>Welcome To Market Place</Heading>
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
          value={orderByKms}
          placeholder="Sort By KMS"
          onChange={(e) => setOrderByKms(e.target.value)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
      </HStack>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
        {state.inventory?.map((item) => {
          return (
            <GridItem w="100%" key={item._id} boxShadow={"base"} p={6}>
              <Box>
                <Image src={item.image} alt="carimg" width={"100%"} height={"auto"} objectFit={"contain"}/>
              </Box>
              <Heading size={"md"}>Title: {item.title}</Heading>
              <Text>Description: {item.description}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Odometer Kms: {item.odometerKms}</Text>
              <Text>Major Scratches: {item.majorScratches}</Text>
              <Text>Original Paint: {item.orgPaint}</Text>
              <Text>Previous Buyers: {item.prevBuyersCount}</Text>
              <Text>Registeration Place: {item.registerationPlace}</Text>
              <Text>Accidents: {item.accidentsCount}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default MarketPlaceInventory;
