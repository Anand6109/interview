const mongoose = require("mongoose");

const connectdb = async ()=>{

    await mongoose.connect("mongodb://localhost:27017/interview");
    console.log("MongoDB connected successfully");
}

module.exports = connectdb;