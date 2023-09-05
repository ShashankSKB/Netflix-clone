import { useDispatch } from "react-redux";
import { OPTIONS } from "../Utils/Contants";
import {
  addTrailerVideo,
  addTrailerVideoHome,
} from "../Store/Reducers/movieReducer";
import { useEffect } from "react";

export const useMovieTrailer = (movieId, home) => {
  const dispatch = useDispatch();

  const fetchMovieVideo = async (movieId) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        OPTIONS
      );
      const json = await data.json();
      if (home) {
        dispatch(addTrailerVideoHome(json));
      } else {
        dispatch(addTrailerVideo(json));
      }
    } catch (err) {}
  };

  useEffect(() => {
    movieId && fetchMovieVideo(movieId);
  }, [movieId]);
};
