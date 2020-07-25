const Mongo = require("./index");

const User = require("./models/user");

const init = () => {
    const DB = new Mongo();
    DB.connect();
    const silence = new DB.User({ username: "Silence" });
    console.log(silence);
};

init();
