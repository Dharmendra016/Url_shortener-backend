const URL = require("../models/url");


exports.redirectController = async (req , res) => {

    try{
        const shortId = req.params.shortId;
        console.log(shortId);
        const dataFromDatabase = await URL.findOneAndUpdate({shortId : shortId} , {
            $push:{visitHistory:{
                timestamps:Date.now()
            }}
        } , {new:true})
        console.log(dataFromDatabase.redirectURL);
        // return res.render('home' , {id:shortId});
        res.redirect(dataFromDatabase.redirectURL);
        
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            error:err.message,
        })
    }


}