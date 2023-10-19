const express = require("express");
const app = express() ; 
const path = require("path");

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require("dotenv").config();

const PORT = process.env.PORT || 4000 ; 

const {dbConnect} = require("./configs/database");
dbConnect();

const route = require("./routes/route");
const staticroute = require("./routes/staticroute");
const signup = require("./routes/signup");

app.use('/url' , route);
app.use(staticroute);
app.use("/user" , signup);


app.listen(PORT , () => {
    console.log("server started at port no :" , PORT) ; 
})

