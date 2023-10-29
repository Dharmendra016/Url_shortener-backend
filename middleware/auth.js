const { getUser} = require("../services/auth");

exports.restrictToLoggedInUserOnly = async(req ,res , next) => {

    const userUid = req.cookies.uid; 

    if(!userUid){
        return res.redirect("/login");
    }
    const user = getUser(userUid);
    
    if( !user ) return res.redirect("/login");
    req.user = user ; 
    console.log(user);
    next();
}

exports.checkAuth =  (req , res, next )=>{
    const userUid = req.cookies.uid; 
    console.log("uid" , userUid) ; 
    const user = getUser(userUid);

    req.user = user ; 
    next() ; 
}