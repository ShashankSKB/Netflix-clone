import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED } from "../Utils/Contants";
import { addTopRated } from "../Store/Reducers/movieReducer";
import { useEffect } from "react";

export const useTopRated = () => {
  const dispatch = useDispatch();
  const fetchTopRated = () => {
    fetch(TOP_RATED, OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRated(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchTopRated();
  }, []);
};
