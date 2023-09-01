import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: {},
  popular: {},
  trailerVideo: {},
};

const movieSlice = createSlice({
  name: "movieReducer",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopular, addTrailerVideo } =
  movieSlice.actions;

export default movieSlice.reducer;
