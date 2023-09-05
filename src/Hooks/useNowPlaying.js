import { useDispatch } from "react-redux";
import { NOW_PLAYING, OPTIONS } from "../Utils/Contants";
import {
  addNowPlayingMovies,
  addTrailerVideo,
} from "../Store/Reducers/movieReducer";
import { useEffect } from "react";

export const useNowPlaying = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingData = () => {
    fetch(NOW_PLAYING, OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlayingMovies(response.results));

        // const randomIndex = Math.floor(Math.random() * response.results);
        // dispatch(
        //   addTrailerVideo(
        //     response.results[Math.floor(Math.random() * randomIndex)]
        //   )
        // );
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchNowPlayingData();
  }, []);
};
