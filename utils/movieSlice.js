import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieNamesTmdb: null,
    moviesResultsTmdb: null,

    searchedMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
    nowPlayingMovies: null,
    populerMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      const { movieNamesTmdb, moviesResultsTmdb } = action.payload;
      state.movieNamesTmdb = movieNamesTmdb;
      state.moviesResultsTmdb = moviesResultsTmdb;
      state.searchedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addPopulerMovies: (state, action) => {
      state.populerMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopulerMovies,
  addTopratedMovies,
  addUpcomingMovies,
  addSearchedMovies,
} = movieSlice.actions;
