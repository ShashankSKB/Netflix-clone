import React from "react";
import MovieCardList from "./MovieCardList";
import { useSelector } from "react-redux";

export default function MovieContainer() {
  const nowPlayingData = useSelector((store) => store.movies.nowPlaying);
  console.log(nowPlayingData);

  return (
    nowPlayingData && (
      <div className="bg-black">
        <div className="relative -mt-60 ">
          <MovieCardList title="Now Playing" data={nowPlayingData} />
          <MovieCardList title="Trending Now" data={nowPlayingData} />
          <MovieCardList title="Popular" data={nowPlayingData} />
        </div>
      </div>
    )
  );
}
