import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { BG_URL } from "../Utils/Util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { validateData } from "../Utils/HelperFunction";
import { addUser } from "../Store/Reducers/userReducer";

export default function Login() {
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [isSignInPage, setIsSignInPage] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleSignedUpToggle = () => {
    setErrorMsg("");
    setIsSignInPage((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = validateData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (isSignInPage) {
      handleSignIn(auth, email.current.value, password.current.value);
    } else {
      handleSignUp(auth, email.current.value, password.current.value);
    }
  };

  const handleSignUp = (auth, email, password) => {
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username.current.value,
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7A7zpLc39btkk7GOY15NpYJvf8ib_BFztqQ&usqp=CAU",
        })
          .then(() => {
            // Profile updated!
            // ...
            dispatch(addUser(user));
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        setErrorMsg(errorMessage);
      });
  };
  const handleSignIn = (auth, email, password) => {
    setErrorMsg("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(addUser(user));

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  return (
    <div className="text-3xl font-bold underline w-screen h-screen">
      <Header />
      <div className="absolute top-0 right-0 w-screen h-screen">
        <img src={BG_URL} className="h-screen object-cover w-screen" />
      </div>
      <div>
        <form
          className="absolute w-full  min-w-min-24 flex flex-col md:w-3/12 mx-auto my-40 right-0 left-0 bg-black p-14 rounded-md opacity-90"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-white">{isSignInPage ? "Sign In" : "Sign Up"}</h1>
          {!isSignInPage && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#333] p-4 text-sm rounded-md my-4  text-white outline-0"
              ref={username}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="bg-[#333] p-4 text-sm rounded-md my-4  text-white outline-0"
            ref={email}
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-[#333] p-4 text-sm rounded-md my-4  text-white outline-0"
            ref={password}
          />
          <p className="text-red-500 text-sm">{errorMsg}</p>
          <button className="bg-[#e50914] p-3 rounded-md text-sm text-white mt-12 cursor-pointer">
            {isSignInPage ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[#737373] text-sm my-2 bg-opacity-0 ">
            {isSignInPage ? "New to Netflix?" : "Already a member ?"}{" "}
            <span
              className="text-white text-sm cursor-pointer"
              onClick={handleSignedUpToggle}
            >
              {isSignInPage ? "Sign up now" : "Sign In"}
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
