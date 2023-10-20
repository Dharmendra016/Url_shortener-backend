const express = require("express");
const router = express.Router() ; 

const {userCreationHandeler , userLoginHandeler} = require("../controllers/user");

router.post("/" , userCreationHandeler);
router.post("/login" , userLoginHandeler);


module.exports = router; 