const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useUnifiedTopology:true,
        useNewUrlParser:true, 
    }).then(() => console.log("database connection successful")).catch((err) => {
        console.log("can't connect to the database " , err)
    })
}