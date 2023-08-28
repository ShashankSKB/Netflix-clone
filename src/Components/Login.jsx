import React from "react";
import { useSelector } from "react-redux";
import NetflixLogo from "../public/Netflix_Logo_PMS.png";
import Header from "./Header";
import { BG_URL } from "../Utils/Util";

export default function Login() {
  const data = useSelector((store) => store.user);

  return (
    <div className="text-3xl font-bold underline w-screen h-screen">
      <Header />
      <div className="absolute top-0 right-0 w-screen h-screen">
        <img src={BG_URL} />
      </div>
      <div>
        <form className="absolute w-full  min-w-min-24 flex flex-col md:w-3/12 mx-auto my-40 right-0 left-0 bg-black p-14 rounded-md opacity-90">
          <h1 className="text-white">Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            className="bg-[#333] p-4 text-sm rounded-md my-4  text-white outline-0"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-[#333] p-4 text-sm rounded-md my-4  text-white outline-0"
          />
          <button className="bg-[#e50914] p-3 rounded-md text-sm text-white mt-12">
            Sign In
          </button>
          <p className="text-[#737373] text-sm my-2 bg-opacity-0">
            New to Netflix?{" "}
            <span className="text-white text-sm">Sign up now</span>.
          </p>
        </form>
      </div>
    </div>
  );
}
