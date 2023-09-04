import React from "react";
import { useMovieTrailer } from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

export default function VideoContainer({ movieId }) {
  useMovieTrailer(movieId);

  const trailerVideos = useSelector((store) => store.movies.trailerVideo);

  const trailerSrc =
    trailerVideos && trailerVideos?.results && trailerVideos?.results[0]?.key;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerSrc + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
}