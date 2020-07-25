module.exports = {
    Get: async (req, res) => {
        const users = await req.DB.User.find({});
        return res.json({ state: "OK", data: users });
    },
    Post: (req, res) => {
        const { username } = req.body;
        const User = new req.DB.User({ username });
        User.save();
        return res.json({ state: "OK", data: User });
    },
};
