import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: {},
  popular: {},
  topRated: {},
  trailerVideo: {},
  movieListTrailers: {},
  watchProviders: {},
  movieOverView: {},
  searchMovieData: {},
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
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieTrailersVideo: (state, action) => {
      state.movieListTrailers = action.payload;
    },
    addWatchProvides: (state, action) => {
      state.watchProviders = action.payload;
    },
    addMovieOverView: (state, action) => {
      state.movieOverView = action.payload;
    },
    addSearchedMovieData: (state, action) => {
      state.searchMovieData = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopular,
  addTrailerVideo,
  addTopRated,
  addMovieTrailersVideo,
  addWatchProvides,
  addMovieOverView,
  addSearchedMovieData,
} = movieSlice.actions;

export default movieSlice.reducer;
