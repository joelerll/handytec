const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const io = require("./ws");
const api = require("./api/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.Server(app);
io(server);

app.use("/api", api);

app.use((req, res, next) => {
    res.status(404);
    res.send("NOT FOUND");
});

module.exports = {
    app,
    server,
};
