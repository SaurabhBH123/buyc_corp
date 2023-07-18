const mongoose = require("mongoose")

const oemSchema = mongoose.Schema({
    modelName:String,
    year:Number,
    listPrice:Number,
    colors:[String],
    mileage:Number,
    power_bhp:Number,
    maxSpeed:Number
},{
    versionKey:false
})

const OEM = mongoose.model("OEM",oemSchema)

module.exports = {OEM}