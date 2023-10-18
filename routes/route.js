const express = require("express");
const router = express.Router() ; 

//importing controllers
const { generateNewShortUrl } = require("../controllers/url");
const { redirectController } = require("../controllers/redirect");
const { analyticsHandeler }  = require("../controllers/analytics");
//routing 
router.post("/" , generateNewShortUrl );
router.get("/:shortId" , redirectController);
router.get("/analytics/:shortId" , analyticsHandeler);

//export
module.exports = router;