const express = require("express");
const routes = express.Router();
const {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    deleteTask
} = require("./controller");

routes.post("/create", createTask);
routes.get("/getall", getAllTask);
routes.get("/getone/:id", getOneTask);
routes.put("/update/:id", updateTask);
routes.delete("/delete/:id", deleteTask);



module.exports = routes;
