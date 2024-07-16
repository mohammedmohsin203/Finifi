import React, { PropsWithChildren } from "react";

export function GridBackgroundDemo({ children }: PropsWithChildren) {
  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[-1]"></div>
      {children}
    </div>
  );
}
