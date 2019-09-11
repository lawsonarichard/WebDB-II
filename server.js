const express = require("express");
const carRouter = require("./routers/cars-router");
const server = express();

const db = require("./data/dbConfig");

server.use(express.json()); //
server.use("/api/cars", carRouter);
module.exports = server;
