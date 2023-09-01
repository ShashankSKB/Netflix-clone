import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userReducer";
import movieReducer from "./Reducers/movieReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default store;
