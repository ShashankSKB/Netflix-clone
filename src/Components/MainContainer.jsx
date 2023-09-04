import React from "react";
import VideoContainer from "./VideoContainer";
import MovieDescription from "./MovieDescription";
import { useSelector } from "react-redux";

export default function MainContainer() {
  const { data } = useSelector(({ movies }) => ({
    data: movies.nowPlaying,
  }));

  return (
    <>
      {data && (
        <div>
          <MovieDescription
            title={data[0]?.title}
            description={data[0]?.overview}
          />
          <VideoContainer movieId={data[0]?.id} />
        </div>
      )}
    </>
  );
}
