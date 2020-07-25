const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = Schema(
    {
        username: { type: String },
    },
    { timestamps: false, versionKey: false, collection: "users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
