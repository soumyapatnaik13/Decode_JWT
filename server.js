const express = require("express");
const bodyParser = require('body-parser');
const router = require("./Routes/routes");
const dotenv= require("dotenv");
const mongose= require("mongoose")
const jwt= require("jsonwebtoken")
const app = express();

app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

mongose.connect('mongodb://localhost:27017/PW_Skills', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
app.use("/api/vi/students",router)

portnumber =3000;
app.listen(portnumber, () => {
    console.log(`App is listening at port number ${portnumber} `);
});
