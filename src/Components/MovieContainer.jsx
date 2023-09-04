import React from "react";
import MovieCardList from "./MovieCardList";
import { useSelector } from "react-redux";

export default function MovieContainer() {
  const nowPlayingData = useSelector((store) => store.movies.nowPlaying);
  const popular = useSelector((store) => store.movies.popular);
  const topRated = useSelector((store) => store.movies.topRated);

  return (
    nowPlayingData && (
      <div className="bg-black">
        <div className="relative -mt-60 ">
          <MovieCardList title="Now Playing" data={nowPlayingData} />
          <MovieCardList title="Top Rated" data={topRated} />
          <MovieCardList title="Popular" data={popular} />
        </div>
      </div>
    )
  );
}
