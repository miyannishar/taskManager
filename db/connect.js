const mongoose = require("mongoose");
mongoose.set("strictQuery", true);


const dbConnect = (url)=>{
    mongoose.connect(url)
    console.log("SUCCESSFULLY CONNECTED TO THE DATABASE")
}

  module.exports = dbConnect;