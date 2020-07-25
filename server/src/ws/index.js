module.exports = (http) => {
    const io = require("socket.io")(http);
    const SocketChat = io.of("/chat");
    SocketChat.on("connection", (socket) => {
        console.log("a user connected");
        socket.on("message", (data) => {
            console.log(data);
        });
    });
};
