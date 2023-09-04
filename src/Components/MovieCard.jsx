import React, { useState } from "react";
import {
  IMG_CDN_URL,
  MOVIE_DATA,
  MOVIE_DETAILS,
  OPTIONS,
  Tabsdata,
  WATCH_PROVIDERS,
} from "../Utils/Contants";
import { useDispatch } from "react-redux";
import {
  addMovieOverView,
  addMovieTrailersVideo,
  addWatchProvides,
} from "../Store/Reducers/movieReducer";
import Modal from "./Modal";
import MovieTrailers from "./MovieTrailers";
import WatchProvidersList from "./WatchProvidersList";
import CustomTabs from "./Tabs";
import MovieOverview from "./MovieOverview";

export default function MovieCard({ posterPath, movieId, overview, title }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const fetchMovieData = (id) => {
    fetch(MOVIE_DATA + id + "/videos", OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addMovieTrailersVideo(response));
        setOpen(true);
      });
  };

  const movieProviders = (id) => {
    fetch(WATCH_PROVIDERS + id + "/watch/providers", OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(addWatchProvides(response));
      });
  };

  const movieDetails = (id) => {
    fetch(MOVIE_DETAILS + id, OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addMovieOverView(response));
        setOpen(true);
      });
  };

  const handleOnClick = (id) => {
    // fetchMovieData(id);
    // movieProviders(id);
    movieDetails(id);
  };

  return (
    <>
      <div onClick={() => handleOnClick(movieId)} className="cursor-pointer">
        <div className="w-36 md:w-48 pr-4 ">
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
      </div>
      <Modal
        isOpen={open}
        setIsOpen={setOpen}
        children={
          <div>
            <MovieOverview title={title} posterPath={posterPath} />
            {/* <CustomTabs /> */}
            {/* <WatchProvidersList title={title} /> */}
            {/* <MovieTrailers overview={overview} posterPath={posterPath} /> */}
          </div>
        }
        title="title"
      />
    </>
  );
}
