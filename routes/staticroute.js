const express = require("express");
const router =express.Router() ; 
const URL = require("../models/url");

router.get("/" , async (req ,res )=>{
    const  id = req.user._id;
    console.log(req.user);
    if( !req.user ) return res.redirect("/login");
    const data = await URL.find({createdBy:id});

    res.render('home' , {data:data});
})

router.get("/signup" , (req , res ) => {
    res.render('signup');
})

router.get("/login" , (req , res ) => {
    res.render('login');
})

module.exports = router ; 