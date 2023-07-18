const express = require("express")
const { OEMModel } = require("../models/oem.model")
const oemRouter = express.Router()

oemRouter.get("/",async(req,res)=>{
    const {modelName} = req.query
    try {
        const query = {}
        if(modelName){
            query.modelName = modelName
        }
        const data = await OEMModel.find(query)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

oemRouter.get("/:id",async(req,res)=>{
    const ID = req.params.id
    try {
        const data = await OEMModel.findOne({_id:ID})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

oemRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try {
        const newOem = new OEMModel(payload)
        await newOem.save()
        res.status(200).send({"msg":"New OEM Added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {oemRouter}