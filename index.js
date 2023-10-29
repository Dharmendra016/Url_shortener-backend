const express = require("express");
const app = express() ; 
const path = require("path");
const cookieParser = require("cookie-parser");
const {restrictToLoggedInUserOnly , checkAuth} = require("./middleware/auth");

//ejs setup ko lagi 
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));


//sabai parser ko lagi 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
require("dotenv").config();



const PORT = process.env.PORT || 4000 ; 



const {dbConnect} = require("./configs/database");
dbConnect();

const route = require("./routes/route");
const staticroute = require("./routes/staticroute");
const signup = require("./routes/signup");



app.use('/url' , restrictToLoggedInUserOnly , route);
app.use("/",checkAuth , staticroute);
app.use("/user", signup);


app.listen(PORT , () => {
    console.log("server started at port no :" , PORT) ; 
})

