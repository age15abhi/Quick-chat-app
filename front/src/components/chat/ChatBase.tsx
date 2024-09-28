"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";

export default function ChatBase() {
  let socket = useMemo(() => {
    const socket = getSocket();
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
