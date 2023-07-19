const express = require("express")
const { InventoryModel } = require("../models/inventory.model")
const inventoryRouter = express.Router()
const { auth } = require("../middlewares/auth.middleware")

//get inventory data
inventoryRouter.get("/getAll",async(req,res)=>{
    const {modelName} = req.query;
    try {
        if(modelName){
            const data = await InventoryModel.find()
            const filteredData = data?.filter((car)=>car.title.toLowerCase().includes(modelName.toLowerCase()))
            res.status(200).send(filteredData)
        }else{
            const data = await InventoryModel.find()
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

inventoryRouter.use(auth)
//get by id
inventoryRouter.get("/getSpecific",async(req,res)=>{
    // const ID = req.params.id
    try {
        const data = await InventoryModel.find({dealer:req.body.dealer}).populate("dealer")
        // console.log(data)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

//add new car in inventory
inventoryRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try {
        const newCar = new InventoryModel(payload)
        await newCar.save()
        res.status(200).send(newCar)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

//update
inventoryRouter.patch("/update/:id",async(req,res)=>{
    const payload = req.body
    const ID = req.params.id
    try {
        await InventoryModel.findByIdAndUpdate({_id:ID},payload)
        res.status(200).send({"msg":"update successful"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

//delete
inventoryRouter.delete("/delete/:id",async(req,res)=>{
    const ID = req.params.id
    try {
        await InventoryModel.findByIdAndDelete({_id:ID})
        res.status(200).send({"msg":"deleted successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})


module.exports = {inventoryRouter}