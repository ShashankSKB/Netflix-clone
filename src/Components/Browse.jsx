import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import { useNowPlaying } from "../Hooks/useNowPlaying";
import { usePopular } from "../Hooks/usePopular";
import { useTopRated } from "../Hooks/useTopRated";
import Search from "./Search";

export default function Browse() {
  useNowPlaying();
  usePopular();
  useTopRated();

  const isBrowse = useSelector((store) => store.user.isBrowse);

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
