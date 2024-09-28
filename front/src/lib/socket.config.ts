import { io, Socket } from "socket.io-client";
import Env from "./env";
let socket: Socket;
export const getSocket = () => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, { autoConnect: false });
  }
  return socket;
};



// readme:
// if the socket is not present the it create a new instance of the socket and assign in the socket variable and return the new socket 