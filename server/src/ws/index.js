module.exports = (io) => {
    const SocketChat = io;
    SocketChat.on("connection", (socket) => {
        socket.on("message", (data) => {
            console.log("send to room message: ", data);
            SocketChat.in(`${data.roomname}`).emit("MESSAGE", data);
        });
        socket.on("join", (data) => {
            console.log(`user ${data.by} a ${data.roomname}`);
            socket.join(`${data.roomname}`);
        });
    });
};
