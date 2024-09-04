// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../../utils/constants";
// import { setTrailerVideo } from "../../utils/movieSlice"; // Update action name to match your implementation
// import { useEffect } from "react";

// const useMovieTrailer = (movieId) => {
//   const dispatch = useDispatch();
//   const trailerVideo = useSelector((store) => store.movies.trailerVideo);

//   const getMovieVideos = async () => {
//     if (!movieId) return; // Ensure movieId is valid before fetching

//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         API_OPTIONS
//       );
//       const json = await response.json();
//       const filterData = json.results.filter(
//         (video) => video.type === "Trailer"
//       );
//       const trailer = filterData.length ? filterData[0] : json.results[0]; // Use the first trailer if available, else the first video
//       dispatch(setTrailerVideo(trailer));
//     } catch (error) {
//       console.error("Failed to fetch movie trailer", error);
//     }
//   };

//   useEffect(() => {
//     if (movieId) {
//       getMovieVideos(); // Fetch trailer when movieId changes
//     }
//   }, [movieId]); // Re-fetch on movieId change

//   return trailerVideo; // Return trailerVideo for possible use in components
// };

// export default useMovieTrailer;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { setTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = () => {
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId) => {
    if (!movieId) return null;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0]; // Use the first trailer if available, else the first video
      dispatch(setTrailerVideo(trailer));
      return trailer;
    } catch (error) {
      console.error("Failed to fetch movie trailer", error);
      return null;
    }
  };

  return getMovieVideos;
};

export default useMovieTrailer;
