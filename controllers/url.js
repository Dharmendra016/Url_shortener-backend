const shortid = require("shortid");

const Url = require("../models/url");

exports.generateNewShortUrl = async ( req , res ) => {
    try{
        const shortId = shortid();
        console.log(shortId);
        const body = req.body;
        
        if( !body.url ){
            res.status(400).json({
                success:false,
                error:"url is not entered !.",
            })
        }
        
        await Url.create({
            shortId:shortId ,
            redirectURL:body.url,
            visitHistory:[],
        })

        res.status(200).json(
            {
                success:true, 
                data:shortId,
                message:"successfully created.",
            }
        )
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            error:err.message,
        })
    }

}