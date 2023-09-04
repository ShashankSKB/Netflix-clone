import React, { useState } from "react";
import { IMG_CDN_URL } from "../Utils/Contants";
import { useSelector } from "react-redux";
import { convertMinutesToHoursAndMinutes } from "../Utils/HelperFunction";
import Modal from "./Modal";
import { useMovieTrailer } from "../Hooks/useMovieTrailer";

export default function MovieOverview({ title, posterPath }) {
  const {
    genres,
    original_title,
    poster_path,
    vote_average,
    overview,
    budget,
    adult,
    runtime,
    vote_count,
    tagline,
    release_date,
    id,
  } = useSelector((store) => store.movies.movieOverView);

  const results = convertMinutesToHoursAndMinutes(runtime);
  const percentage = (vote_average / 10) * 100;

  console.log("percentage", percentage);

  const [isOpen, setIsOpen] = useState(false);

  useMovieTrailer(id);

  const trailerVideos = useSelector((store) => store.movies.trailerVideo);

  const trailerSrc =
    trailerVideos && trailerVideos?.results && trailerVideos?.results[0]?.key;

  return (
    <div className="text-white w-[50vw]">
      <p className="mb-4">Overview</p>

      <div className="flex flex">
        <div className="w-[320px]  md:w-48 pr-4 ">
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
        <div>
          <div className="text-sm text-slate-400">
            <p className="text-3xl font-medium text-white">{title}</p>
            <span className=" text-sm">
              {release_date.split("-").join("/")}
            </span>
            <p className="text-sm ">
              {genres.map((item) => item.name).join(",")}
            </p>
            <p>{`${results.hours} hr ${results.minutes} min`}</p>
          </div>
          <div className="text-sm text-slate-400">
            <p>Rating : {vote_average.toFixed(2)}</p>
          </div>

          <div className="text-sm text-slate-200 text-amber-500 italic">
            <p>{tagline}</p>
          </div>
          <p>Overview</p>
          <p className="text-sm">{overview}</p>
          <button
            className="p-2 px-3 m-1 text-black bg-white rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            ▶️ Play Trailer
          </button>
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            children={
              <iframe
                className="w-[70vw] aspect-video"
                src={
                  "https://www.youtube.com/embed/" +
                  trailerSrc +
                  "?&autoplay=1&mute=0"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen"
              ></iframe>
            }
          ></Modal>
        </div>
      </div>
    </div>
  );
}
