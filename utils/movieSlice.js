import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcomingMovies: null,
    topratedMovies: null,
    nowPlayingMovies: null,
    populerMovies: null,
    trailerVideo: null,
  },
  reducers: {
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
} = movieSlice.actions;
