const express = require("express");
const app = express();
const routes = require("./route");
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Welcome to our API")
});

app.use("*/", (req, res) => {
    res.status(404).json({message: "Route not found"})
});



module.exports = app;