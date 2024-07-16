import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { InputForm } from "./Input";

type Props = {};

const AlertProps = (props: Props) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">No, fill manually</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send Vendor Form to Users</AlertDialogTitle>{" "}
            <AlertDialogDescription>
              <InputForm username="Hello" />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertProps;
