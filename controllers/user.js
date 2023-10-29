const User = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const { setUser} = require("../services/auth");

exports.userCreationHandeler = async (req ,res ) => {

    try{

        const {name , email , password} = req.body; 

        await User.create({
            name , 
            email , 
            password,
        })

        res.render("home")

    }catch(err) {
        console.log(err);
        res.status(500).json({
            success:false, 
            error:err.message,
        })
    }

}

exports.userLoginHandeler = async (req , res ) => {
    const {email , password } = req.body; 

    const dataUser = await User.findOne({email , password});
    console.log(dataUser);

    if(!dataUser){
        return res.render("login");
    }

    const token = setUser(dataUser);
    console.log("tokens " , token);
    res.cookie("uid" , token);

    return res.redirect("/");

}