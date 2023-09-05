import React, { useState } from "react";
import { OPTIONS, SEARCH_MOVIE } from "../Utils/Contants";
import { addSearchedMovieData } from "../Store/Reducers/movieReducer";
import { useDispatch, useSelector } from "react-redux";
import MovieCardList from "./MovieCardList";

export default function Search() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setText(e.target.value);

    fetch(
      SEARCH_MOVIE + `?query=${text}&include_adult=false&language=en-US`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((resp) => dispatch(addSearchedMovieData(resp)));
  };

  const searchData = useSelector(
    (store) => store.movies.searchMovieData.results
  );

  return (
    <div>
      <div className="absolute mt-[50vh] w-full">
        <MovieCardList data={searchData} />
      </div>
      <div className="bg-black  text-white  mx-auto flex justify-center h-[100vh]">
        <input
          placeholder="Seach By Movie"
          className="h-10 p-4 rounded-lg mt-28 outline-none text-black"
          value={text}
          onChange={(e) => handleSearch(e)}
        ></input>
      </div>
    </div>
  );
}
