import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import img from "../../public/Ellipse 1.png";

const Avatarprops = ({ props }: any) => {
  return (
    <>
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>
          <Image src={img} className="h-full w-full" alt="user" />
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default Avatarprops;
