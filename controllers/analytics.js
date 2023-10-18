const URL = require("../models/url");

exports.analyticsHandeler = async ( req , res ) => {
     
    try{

        const shortId = req.params.shortId;

        const data = await URL.findOne({shortId});

        res.json({
            noOfClick:data.visitHistory.length ,
            data:data.visitHistory,
        })


    }catch(err) {
        console.log(err);
        res.status(500).json({
            success:false, 
            error:err.message,
        })
    }

}