const express = require("express");
const app = express() ; 
const ejs = require("ejs");
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
app.use('/url' , route);

app.get("/" , (req ,res )=>{
    res.render('home');
})

app.listen(PORT , () => {
    console.log("server started at port no :" , PORT) ; 
})

