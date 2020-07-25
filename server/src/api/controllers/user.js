module.exports = {
    Get: (req, res) => {
        console.log("asds")
        return res.json({ message: "Get USERS" });
    },
    Post: (req, res) => {
        return res.send("User Post");
    },
};
