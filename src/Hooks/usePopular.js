import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR } from "../Utils/Contants";
import { addPopular } from "../Store/Reducers/movieReducer";
import { useEffect } from "react";

export const usePopular = () => {
  const dispatch = useDispatch();
  const fetchPopular = () => {
    fetch(POPULAR, OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopular(response.results));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchPopular();
  }, []);
};
