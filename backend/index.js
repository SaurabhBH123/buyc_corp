const express = require("express")
const cors = require("cors")
const { connection } = require("./db")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page for Buyc Corp")
})
app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running at port 8080")
})
