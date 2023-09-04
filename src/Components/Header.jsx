import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NetflixLogo from "../public/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser, setBrowser } from "../Store/Reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { getURLQuery } from "../Utils/HelperFunction";

export default function Header() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UrlQuery = getURLQuery();
  const search = UrlQuery.get("search");
  console.log("search", search);

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
          <img src={NetflixLogo} onClick={() => dispatch(setBrowser(true))} />
        </div>

        <div className="w-18 object-cover text-white">
          <img src={user?.photoURL} />
          <div className="flex flex-row gap-2 m-3">
            <button
              className="text-sm text-stone-400 mr-2"
              onClick={() => {
                dispatch(setBrowser(false));
              }}
            >
              Search
            </button>
            <button className="text-sm" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
