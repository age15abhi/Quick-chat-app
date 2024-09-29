import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;
import Routes from './routes/index.js'

//-------------------------------------------//
// these are the redis import

import redis from "./config/redis.config.js"
import { createAdapter } from "@socket.io/redis-streams-adapter";

// -----------------------------------------------------------------------------//
// here we are import the socket io thing for setup
import {Server} from 'socket.io'
import {createServer} from 'http'
import { setupSocket } from "./socket.js";
const server = createServer(app)

// here we creating the instance of the socket io server
const io = new Server(server , {
  cors : {
    origin: "*"
  },
  adapter: createAdapter(redis)
})

setupSocket(io)
export {io}
// -----------------------------------------------------------------------------//

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api" , Routes)

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
