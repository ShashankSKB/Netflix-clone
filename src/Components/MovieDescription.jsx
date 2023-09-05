import React from "react";

export default function MovieDescription({ title, description }) {
  return (
    <div className=" sm:w-screen aspect-video p-10 absolute pt-[30%] pb-[20%] text-white bg-gradient-to-r from-black">
      <div className="w-1/3  sm:w-1/4 flex flex-col gap-3">
        <p className=" text-sm sm:text-xl">{title}</p>
        <p className="hidden sm:block">{description}</p>
      </div>
    </div>
  );
}
