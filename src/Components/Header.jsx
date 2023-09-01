import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NetflixLogo from "../public/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "../Store/Reducers/userReducer";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="text-3xl font-bold underline">
      <div className="w-screen absolute bg-gradient-to-b from-slate-800 p-2 z-10 flex justify-between">
        <div className="w-40">
          {" "}
          <img src={NetflixLogo} onClick={() => navigate("/browse")} />
        </div>

        <div className="w-20 object-cover text-white">
          <img src={user?.photoURL} />
          <button className="text-sm" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
