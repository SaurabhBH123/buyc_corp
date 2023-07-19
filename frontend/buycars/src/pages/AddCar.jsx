import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/inventory/inventory.action";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState([""]);
  const [odometerKms, setOdometerKms] = useState(0);
  const [majorScratches, setMajorScratches] = useState(false);
  const [orgPaint, setOrgPaint] = useState("");
  const [accidentsCount, setAccidentsCount] = useState(0);
  const [prevBuyersCount, setPrevBuyersCount] = useState(0);
  const [registerationPlace, setRegisterationPlace] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      image,
      description,
      odometerKms: Number(odometerKms),
      majorScratches,
      orgPaint,
      accidentsCount: Number(accidentsCount),
      prevBuyersCount: Number(prevBuyersCount),
      registerationPlace,
      price: Number(price),
    };
    axios.post(`http://localhost:8080/inventory/add`,obj,{
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
    })
    .then((res)=>{
        dispatch(addData(res.data))
        toast({
            title: 'A new car is added.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        navigate("/dealerinventory")
    })
    .catch((err)=>console.log(err))
    .finally(()=>{
        setTitle("")
        setImage("")
        setDescription([""])
        setAccidentsCount(0)
        setMajorScratches(false)
        setOdometerKms(0)
        setOrgPaint("")
        setPrevBuyersCount(0)
        setRegisterationPlace("")
        setPrice(0)
    })
  };
  return (
    <Container maxW={"md"} mt={4} p={6}>
      <Heading>Add New Car In Your Inventory</Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormLabel>Image URL</FormLabel>
        <Input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          resize={"vertical"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormLabel>Odometer KMS</FormLabel>
        <Input
          type="number"
          value={odometerKms}
          onChange={(e) => setOdometerKms(e.target.value)}
        />
        <Checkbox
          isChecked={majorScratches}
          onChange={() => setMajorScratches(!majorScratches)}
        >
          <FormLabel>Major Scratches</FormLabel>
        </Checkbox>
        <FormLabel>Original Paint</FormLabel>
        <Input
          type="text"
          value={orgPaint}
          onChange={(e) => setOrgPaint(e.target.value)}
        />
        <FormLabel>Accidents Count</FormLabel>
        <Input
          type="number"
          value={accidentsCount}
          onChange={(e) => setAccidentsCount(e.target.value)}
        />
        <FormLabel>Previous Buyers Count</FormLabel>
        <Input
          type="number"
          value={prevBuyersCount}
          onChange={(e) => setPrevBuyersCount(e.target.value)}
        />
        <FormLabel>Registeration Place</FormLabel>
        <Input
          type="text"
          value={registerationPlace}
          onChange={(e) => setRegisterationPlace(e.target.value)}
        />
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button type="submit" mt={4} colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddCar;
