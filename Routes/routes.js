const express=require('express')
const router= express.Router();

const controller= require("../controller/controller")
const verify= require("../Middlware/middleware")

router.post("/signup",controller.userSignUp)
router.post("/login",controller.userLogin)
router.get("/booking",verify,controller.getBooking)

module.exports=router
