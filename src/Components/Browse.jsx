import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { NOW_PLAYING, OPTIONS } from "../Utils/Contants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Store/Reducers/movieReducer";
import { useNowPlaying } from "../Hooks/useNowPlaying";
import { usePopular } from "../Hooks/usePopular";
import { useTopRated } from "../Hooks/useTopRated";
import { useLocation, useParams } from "react-router-dom";
import { getURLQuery } from "../Utils/HelperFunction";
import Search from "./Search";

export default function Browse() {
  useNowPlaying();
  usePopular();
  useTopRated();

  const isBrowse = useSelector((store) => store.user.isBrowse);
  console.log(isBrowse);

  return (
    <div>
      <Header />
      <div>
        {!isBrowse ? (
          <Search />
        ) : (
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
}
