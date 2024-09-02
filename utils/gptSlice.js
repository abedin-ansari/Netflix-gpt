import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptMovies: null,
    showGptSearch: false,
    movieNames: null,
    moviesResults: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      const { movieNames, moviesResults } = action.payload;
      state.movieNames = movieNames;
      state.moviesResults = moviesResults;
      state.gptMovies = action.payload;
    },
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
