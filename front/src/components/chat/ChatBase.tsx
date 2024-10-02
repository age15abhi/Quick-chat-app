"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";


export default function ChatBase({groupId}:{groupId:string}) {
  let socket = useMemo(() => {
    const socket = getSocket();
// adding the custom attribute before connect to the socket server
  socket.auth = {
   room:groupId,
  }
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data:any) => {
      console.log("the data is " , data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    console.log("i am clickable.." , uuidV4());
    socket.emit("message", { name: "mayank", id: uuidV4() });
  };

  return <div>
    <Button onClick={handleClick}>Send Message</Button>
  </div>;
}
