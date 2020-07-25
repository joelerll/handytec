const User = require("./controllers/user");
const Room = require("./controllers/room");

module.exports = (api) => {
    api.get("/username", User.Get);
    api.post("/username", User.Post);

    api.get("/room", Room.Get);
    api.post("/room", Room.Post);
    api.post("/room/:id", Room.Get);
    return api;
};
