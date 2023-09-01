import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { NOW_PLAYING, OPTIONS } from "../Utils/Contants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Store/Reducers/movieReducer";
import { useNowPlaying } from "../Hooks/useNowPlaying";

export default function Browse() {
  useNowPlaying();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
