const express = require("express");
const router = express.Router() ; 

const {userCreationHandeler} = require("../controllers/user");

router.post("/" , userCreationHandeler);

module.exports = router; 