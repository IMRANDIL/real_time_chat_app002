const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  //add new user...

  socket.on("new-user-add", (newUserId) => {
    //if user is not in activeUsers array
    if (!activeUsers.includes(newUserId)) {
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    console.log("connected users: ", activeUsers);
    io.emit("get-users", activeUsers);
  });

  //send message...

  socket.on("send-message", (message) => {
    const { receiverId } = message;
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("sending from socket to :", receiverId);
    console.log("message:", message);
    if (user) {
      io.to(user.socketId).emit("receive-message", message);
    }
  });

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", activeUsers);
    io.emit("get-users", activeUsers);
  });
});
