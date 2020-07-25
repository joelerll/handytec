module.exports = {
    Get: async (req, res) => {
        const rooms = await req.DB.Room.find({});
        return res.json({ state: "OK", data: rooms });
    },
    Post: (req, res) => {
        const { name } = req.body;
        const Room = new req.DB.Room({ name });
        Room.save();
        return res.json({ state: "OK", data: Room });
    },
    GetOne: async (req, res) => {
        const { id } = req.params;
        const Room = await req.DB.Room.findById(id);
        return res.send({ state: "OK", data: Room });
    },
};
