const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Health Check Route
app.get("/", (req, res) => {
    res.json({ status: "OK", message: "Job Potal API is running" })
})
module.exports = app;