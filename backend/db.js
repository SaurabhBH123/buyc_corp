const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://bhandarisaurabh:bhandarisaurabh@cluster0.k9ntg6n.mongodb.net/buyccorp?retryWrites=true&w=majority")

module.exports = {connection}

