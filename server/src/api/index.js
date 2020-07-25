const express = require("express");
const cors = require("cors");

const api = express();
api.use(cors());

const routes = require("./routes")(api);

module.exports = routes;
