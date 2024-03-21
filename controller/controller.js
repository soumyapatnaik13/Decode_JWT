const userModel= require("../Model/model")
const jwt = require("jsonwebtoken")
const middleware= require("../Middlware/middleware")
exports.userSignUp = (req, res) => {
  userModel.create(req.body).then(() => {
      res.json({"message": "Successfully created"}).status(201);
  }).catch((error) => {
      res.json({"error": "Not found"}).status(500);
  });
};

exports.userLogin = async (req, res) => {
  try {
    const { email } = req.body; // destructuring
    const user = await userModel.find({ "email": email });//returns a promise so wait untill it gets the response

    if (user.length > 0) { //retuns a array if  that length is >0 means on document is there
      const secretKey = "secret"; //if not specified the in the .env file
      const payload = { //create the paylaod which has obj and propery which value is the email
        email: user[0].email,

      };

      jwt.sign(payload, process.env.secretkey, (err, token) => {
        if (err) {
          res.status(500).json({ message: "Failed to generate token" });
        } else {
          res.status(201).json({ token: token, message: "Token generated" });
        }
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getBooking=(req,res)=>{
    console.log(req.email);
}
