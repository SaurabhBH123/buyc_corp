import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getSpecific } from "../redux/inventory/inventory.action";
import { Link } from "react-router-dom";


const DealerInventory = () => {
  const state = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  const toast = useToast();
//   const [editId,setEditId] = useState("")
  // console.log(state.specInventory)
  const getInventorySpecData = () => {
    axios
      .get(`https://kind-gold-stingray-hat.cyclic.app/inventory/getSpecific`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res)
        dispatch(getSpecific(res.data));
      })
      .catch((err) => console.log(err));
  };

  
  useEffect(() => {
    getInventorySpecData();
  }, []);
  return (
    <>
      <Heading mt={4}>Welcome To Your Inventory</Heading>
      <Link to="/addcar">
        <Button>Add New Car</Button>
      </Link>
      
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
        {state.specInventory?.map((item) => {
          return (
            <GridItem w="100%" key={item._id} boxShadow={"base"} p={6}>
              <Box>
                <Image
                  src={item.image}
                  alt="carimg"
                  width={"100%"}
                  height={"auto"}
                  objectFit={"contain"}
                />
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
              <HStack justifyContent={"center"}>
                <Link to={`/editdetails/${item._id}`}>
                  <Button
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    axios
                      .delete(
                        `https://kind-gold-stingray-hat.cyclic.app/inventory/delete/${item._id}`,
                        {
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: localStorage.getItem("token"),
                          },
                        }
                      )
                      .then((res) => {
                        dispatch(deleteData(item._id));
                        // dispatch(getSpecific(res.data))
                        toast({
                          title: `Deleted Successfully!`,
                          // description: `${err.response.data.msg}`,
                          status: "success",
                          isClosable: true,
                        });
                      })
                      .catch((err) => console.log(err))
                  }}
                >
                  Delete
                </Button>
              </HStack>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default DealerInventory;
