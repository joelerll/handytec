const shortid = require("shortid");
const { exists } = require("../../db/models/user");

module.exports = {
    Get: async (req, res) => {
        const users = await req.DB.User.find({});
        return res.json({ state: "OK", data: users });
    },
    Post: async (req, res) => {
        let userSend = {};
        let roomSend = {};
        const { username, partner } = req.body;
        const exitsUsers = await req.DB.User.findOne({ username });
        userSend = exitsUsers;
        const User = new req.DB.User({ username });
        if (!exitsUsers) {
            User.save();
            userSend = User;
        }

        const roomName = `${username}_${partner}`;
        const roomPartner = `${partner}_${username}`;
        const exitsRoom = await req.DB.Room.findOne({ name: roomName });
        const exitsRoomPartner = await req.DB.Room.findOne({
            name: roomPartner,
        });

        if (exitsRoom) {
            roomSend = exitsRoom;
        }

        if (exitsRoomPartner) {
            roomSend = exitsRoomPartner;
        }

        const Room = new req.DB.Room({
            name: roomName,
            users: [username, partner],
        });
        if (!exitsRoom && !exitsRoomPartner) {
            Room.save();
            roomSend = Room;
        }

        const Partner = await req.DB.User.findOne({ username: partner });

        return res.json({
            state: "OK",
            data: { User: userSend, Room: roomSend, Partner },
        });
    },
};
