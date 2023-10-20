const shortid = require("shortid");

const Url = require("../models/url");

exports.generateNewShortUrl = async ( req , res ) => {
    try{
        const shortId = shortid();
        console.log(shortId);
        const body = req.body;
        
        if( !body.url ){
            return res.status(400).json({
                success:false,
                error:"url is not entered !.",
            })
        }else{

        
            await Url.create({
                shortId:shortId ,
                redirectURL:body.url,
                visitHistory:[],
                createdBy:req.user._id,
            })
            return res.render('home' , {id:shortId});
                    
        }
        // res.status(200).json(
        //     {
        //         success:true, 
        //         data:shortId,
        //         message:"successfully created.",
        //     }
        // )
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            error:err.message,
        })
    }

}