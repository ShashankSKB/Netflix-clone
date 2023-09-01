import React from "react";

export default function MovieDescription({ title, description }) {
  return (
    <div className="w-screen aspect-video p-10  absolute pt-[30%]  text-white bg-gradient-to-r from-black">
      <div className="w-1/4 flex flex-col gap-3">
        <p className="text-xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
