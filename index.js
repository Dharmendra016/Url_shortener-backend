const express = require("express");
const app = express() ; 
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 4000 ; 

const {dbConnect} = require("./configs/database");
dbConnect();

const route = require("./routes/route");
app.use('/url' , route);

app.listen(PORT , () => {
    console.log("server started at port no :" , PORT) ; 
})

