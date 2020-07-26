const mongoose = require("mongoose");
const _ = require("lodash");
const { DATABASE, ENV } = require("../constants");

const User = require("./models/user");
const Room = require("./models/room");

const build = (config) => {
    if (config.port) {
        return `mongodb://${config.host}/${config.database}`;
    }
    return `mongodb://${config.host}:${config.port}/${config.database}`;
};

class Mongo {
    constructor(config = {}) {
        this.config = _.defaultsDeep(
            {
                database: DATABASE[ENV],
            },
            config
        );
        this.User = User;
        this.Room = Room;
    }

    connect() {
        return new Promise((resolve, reject) => {
            mongoose.connect(build(this.config.database), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const db = mongoose.connection;

            db.on("error", () => {
                return reject(new Error("Connection error"));
            });

            db.once("open", () => {
                console.log("Database connected");
                resolve(db);
            });

            db.on("disconnected", function () {
                return reject(new Error("Disconnect Database"));
            });
        });
    }

    get() {}
}

module.exports = Mongo;
