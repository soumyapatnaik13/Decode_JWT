const jwt= require("jsonwebtoken");

verify=(req,res,next)=>{
    const userToken = req.headers['authorization'];//it will sent by the ls in the front end in the header
    // console.log(userToken)//return a bearer token 
    const extract= userToken.split(' ')[1] //["braerer",<token>]
    try{
        jwt.verify(extract,"secret",(err,decode)=>{
            if(err){
                res.status(404).json({
                 "message": "not found"
                })
            }
            else{
                //want to sent back the email then decode has that value
                req.email=decode.email;
            }
            next();
        })
    }catch(error){
        res.status(404).json({
            "message":"not found"
        })
    }

}

module.exports=verify