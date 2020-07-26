const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const MESSAGE_TYPES = {
    TEXT: "TEXT",
};

const RoomSchema = Schema(
    {
        name: { type: String },
        chat: [
            {
                created_at: Date,
                message: Schema.Types.Mixed,
                type: {
                    type: String,
                    default: MESSAGE_TYPES.TEXT,
                },
                by: String,
                to: String,
            },
        ],
        users: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true, versionKey: false, collection: "rooms" }
);

module.exports = mongoose.model("Room", RoomSchema);
