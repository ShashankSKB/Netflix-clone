import React from "react";
import { useMovieTrailer } from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

export default function VideoContainer({ movieId }) {
  useMovieTrailer(movieId, true);

  const trailerVideos = useSelector((store) => store.movies.trailerVideoHome);

  const trailerSrc =
    trailerVideos && trailerVideos?.results && trailerVideos?.results[0]?.key;

  return (
    <div>
      <iframe
        className="w-screen  aspect-video  sm:w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerSrc +
          "?&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
