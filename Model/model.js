
const moongose= require("mongoose")

const userschema= new moongose.Schema({
    name:String,
    email:String,
    password:String,
},{Timestamp:true})

const Usermodel= moongose.model("Pw_skills",userschema);
module.exports=Usermodel;