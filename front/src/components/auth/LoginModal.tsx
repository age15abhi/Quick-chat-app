"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import Image from "next/image";
import {signIn} from 'next-auth/react'

export default function LoginModal() {

const handleLogin = () => {
signIn("google"  , {
  callbackUrl:'/dashboard',
  redirect:true,
})
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting Start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to QuickChat</DialogTitle>
          <DialogDescription>
            it is a chatting application through which you can chat with anyone
            in a second
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            className="mr-4"
            width={25}
            height={25}
            alt="google_image"
          />
          Continue with google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
