const User = require("../models/user");


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