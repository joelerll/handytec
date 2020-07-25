const express = require("express");
const cors = require("cors");

const Mongo = require("../db");
const DB = new Mongo();
DB.connect();

const api = express();
api.use(cors());

api.all("/**", (req, resp, next) => {
    req.DB = DB;
    next();
});

const routes = require("./routes")(api);

module.exports = routes;
