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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecific } from "../redux/inventory/inventory.action";

const EditDetails = () => {
  const { id } = useParams();
  const [obj, setObj] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState([""]);
  const [updatedOdometerKms, setUpdatedOdometerKms] = useState(0);
  const [updatedMajorScratches, setUpdatedMajorScratches] = useState(false);
  const [updatedOrgPaint, setUpdatedOrgPaint] = useState("");
  const [updatedAccidentsCount, setUpdatedAccidentsCount] = useState(0);
  const [updatedPrevBuyersCount, setUpdatedPrevBuyersCount] = useState(0);
  const [updatedRegisterationPlace, setUpdatedRegisterationPlace] =
    useState("");
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()

  const getById = () => {
    axios
      .get(`http://localhost:8080/inventory/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setObj(res.data);
        setUpdatedTitle(res.data.title);
        setUpdatedImage(res.data.image);
        setUpdatedDescription(res.data.description);
        setUpdatedAccidentsCount(res.data.accidentsCount);
        setUpdatedMajorScratches(res.data.majorScratches);
        setUpdatedOdometerKms(res.data.odometerKms);
        setUpdatedOrgPaint(res.data.orgPaint);
        setUpdatedPrevBuyersCount(res.data.prevBuyersCount);
        setUpdatedRegisterationPlace(res.data.registerationPlace);
        setUpdatedPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title:updatedTitle,
      image:updatedImage,
      description:updatedDescription,
      odometerKms: Number(updatedOdometerKms),
      majorScratches:updatedMajorScratches,
      orgPaint:updatedOrgPaint,
      accidentsCount: Number(updatedAccidentsCount),
      prevBuyersCount: Number(updatedPrevBuyersCount),
      registerationPlace:updatedRegisterationPlace,
      price: Number(updatedPrice),
    };
    console.log(obj)
    axios.put(`http://localhost:8080/inventory/update/${id}`,obj,{
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
    })
    .then((res)=>{
      // console.log(res)
        toast({
            title: 'Car details are updated successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        navigate("/dealerinventory")
    })
    .catch((err)=>console.log(err))
    .finally(()=>{
        setUpdatedTitle("")
        setUpdatedImage("")
        setUpdatedDescription([""])
        setUpdatedAccidentsCount(0)
        setUpdatedMajorScratches(false)
        setUpdatedOdometerKms(0)
        setUpdatedOrgPaint("")
        setUpdatedPrevBuyersCount(0)
        setUpdatedRegisterationPlace("")
        setUpdatedPrice(0)
    })
  };

  useEffect(() => {
    getById();
  }, []);
  return (
    <Container maxW={"md"} mt={4} p={6}>
      <Heading>Edit Car Details</Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <FormLabel>Image URL</FormLabel>
        <Input
          type="url"
          value={updatedImage}
          onChange={(e) => setUpdatedImage(e.target.value)}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          resize={"vertical"}
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <FormLabel>Odometer KMS</FormLabel>
        <Input
          type="number"
          value={updatedOdometerKms}
          onChange={(e) => setUpdatedOdometerKms(e.target.value)}
        />
        <Checkbox
          isChecked={updatedMajorScratches}
          onChange={() => setUpdatedMajorScratches(!updatedMajorScratches)}
        >
          <FormLabel>Major Scratches</FormLabel>
        </Checkbox>
        <FormLabel>Original Paint</FormLabel>
        <Input
          type="text"
          value={updatedOrgPaint}
          onChange={(e) => setUpdatedOrgPaint(e.target.value)}
        />
        <FormLabel>Accidents Count</FormLabel>
        <Input
          type="number"
          value={updatedAccidentsCount}
          onChange={(e) => setUpdatedAccidentsCount(e.target.value)}
        />
        <FormLabel>Previous Buyers Count</FormLabel>
        <Input
          type="number"
          value={updatedPrevBuyersCount}
          onChange={(e) => setUpdatedPrevBuyersCount(e.target.value)}
        />
        <FormLabel>Registeration Place</FormLabel>
        <Input
          type="text"
          value={updatedRegisterationPlace}
          onChange={(e) => setUpdatedRegisterationPlace(e.target.value)}
        />
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />
        <Button type="submit" mt={4} colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditDetails;
