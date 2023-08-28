import React from "react";
import { useSelector } from "react-redux";
import NetflixLogo from "../public/Netflix_Logo_PMS.png";

export default function Header() {
  const data = useSelector((store) => store.user);

  return (
    <div className="text-3xl font-bold underline">
      <div className="w-40 absolute bg-gradient-to-b from-slate-800 p-2 z-10">
        <img src={NetflixLogo} />
      </div>
    </div>
  );
}
