import React, { Dispatch, SetStateAction } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {signOut} from 'next-auth/react'
  

export default function LogoutModal({open , setOpen} : {open: boolean , setOpen:Dispatch<SetStateAction<boolean>>}) {


  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/"
    })
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your current session from your device.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}
