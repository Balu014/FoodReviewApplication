// Require packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoURI = "mongodb://0.0.0.0:27017/omnifood";
const userDetails = require("./routes/userDetailsRoutes");
const UserSchema = require("./models/userDetailsModel")

app.use(bodyParser.json())
app.use(cors())

app.use('/getdata', userDetails)
app.use('/postdata', userDetails)

//  Establish connection with MongoDB
mongoose
    .connect(
        mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Server listen
app.listen(3000, () => console.log("Server listening to port 3000"));