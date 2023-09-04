import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/Contants";
import YtVideoPlayer from "./YtVideoPlayer";

export default function MovieTrailers({ posterPath, overview }) {
  const { movieTrailersList } = useSelector(({ movies }) => ({
    movieTrailersList: movies.movieListTrailers.results,
  }));

  console.log("movieTrailersList", movieTrailersList);
  return (
    <div className="w-[900px] bg-black text-white">
      <div className="flex flex-row items-center ">
        <div className="w-36 md:w-48 pr-4 mb-2 ">
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
        <span className="w-2/3">{overview}</span>
      </div>

      <div className="flex flex-col gap-2 rounded text-white ">
        {movieTrailersList.map((item) => {
          return (
            <div key={item.id} className="flex flex-row gap-2 ">
              <YtVideoPlayer Videkey={item.key} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
