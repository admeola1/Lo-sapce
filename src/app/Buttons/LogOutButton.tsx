"use client";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebaseConfig";
import { Button } from "flowbite-react";

interface ButtonPropsOut {
  text: string; // Button label text
}
const auth = getAuth(app);
const HandleLogOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("you have logged out");
    })
    .catch((error) => {
      // An error happened.
    });
};

const LogOut: React.FC<ButtonPropsOut> = ({ text }) => {
  return (
    <Button pill color="dark" onClick={HandleLogOut}>
      {text}
    </Button>
  );
};

export default LogOut;
