const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost/muggers-do", { useNewUrlParser: true })

app.use(express.urlencoded())
app.use(bodyParser.json());
app.use("/api", require("./api"))



app.listen(4000, ()=> {
    console.log("WERTYU");
})