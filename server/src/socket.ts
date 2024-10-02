import { Server, Socket } from "socket.io";

// adding custom type in the socket class the room is not present in the socket
interface CustomSocketType extends Socket {
  room?: string;
}

export function setupSocket(io: Server) {
  // before the connection we adding the middleware for the message goes to the same room receiver where the sender send the message
  io.use((socket: CustomSocketType, next) => {
    const room = socket.handshake.auth.room;

    if (!room) {
      return next(new Error("invalid room"));
    }

    socket.room = room;
    next();
  });

  io.on("connection", (socket: CustomSocketType) => {
    console.log("The socket connected...", socket.id);

    // join the room before the connection
    socket.join(socket.room);

    socket.on("message", (data) => {
      console.log("server side message", data);
      io.to(socket.room).emit("message", data);
    });

    socket.on("disconnected", () => {
      console.log("A user disconnected", socket.id);
    });
  });
}
