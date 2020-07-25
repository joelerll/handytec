const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = Schema(
    {
        username: { type: String },
    },
    { timestamps: true, versionKey: false, collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
