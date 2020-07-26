const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Mongo = require("../db");
const DB = new Mongo();
DB.connect();

const api = express();
api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

api.all("/**", (req, resp, next) => {
    req.DB = DB;
    next();
});

const routes = require("./routes")(api);

module.exports = routes;
