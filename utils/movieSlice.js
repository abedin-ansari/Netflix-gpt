import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieNamesTmdb: null,
    moviesResultsTmdb: null,

    searchedMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
    nowPlayingMovies: [],
    populerMovies: null,
    trailerVideo: null,

    selectedMovie: null, // To manage the selected movie
    isTrailerPlaying: false, // To manage the iframe trailer state
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

    setMovies: (state, action) => {
      state.nowPlayingMovies = action.payload.nowPlayingMovies;
      state.topratedMovies = action.payload.topratedMovies;
      state.populerMovies = action.payload.populerMovies;
      state.upcomingMovies = action.payload.upcomingMovies;
    },
    setTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setIsTrailerPlaying: (state, action) => {
      state.isTrailerPlaying = action.payload;
    },
    clearMovieData: (state) => {
      state.selectedMovie = null;
      state.trailerVideo = null;
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

  setMovies,
  setTrailerVideo,
  setSelectedMovie,
  setIsTrailerPlaying,
  clearMovieData,
} = movieSlice.actions;
