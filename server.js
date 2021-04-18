console.log("starting server");

const express = require("express");
var bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/profile", (req, res) => {
    console.log("connection established...")
    res.send("Profile loading...");
})

app.post("/profile", (req, res) => {
    console.log(req.body);
    const user = {
        name: "Teddy",
        hobby: "Drinkin"
    }

    res.send("Success");
});

app.listen(3000);