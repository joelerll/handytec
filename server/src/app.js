const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./api/index");

const app = express();
app.use(cors());
app.use(morgan("tiny"));

const server = http.createServer(app);

const socket = require("socket.io");
const IO = socket(server);
require("./ws")(IO);

app.use("/api", api);

app.use((req, res, next) => {
    res.status(404);
    res.send("NOT FOUND");
});

module.exports = {
    app,
    server,
};
