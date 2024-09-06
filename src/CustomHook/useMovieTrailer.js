import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { setTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  // Accept movieId as a parameter
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

  // useEffect to automatically fetch trailer when movieId changes
  useEffect(() => {
    if (movieId) {
      getMovieVideos(movieId); // Call the function with movieId
    }
  }, [movieId]); // Dependency array to trigger on movieId change

  return getMovieVideos;
};

export default useMovieTrailer;

// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../../utils/constants";
// import { setTrailerVideo } from "../../utils/movieSlice";

// const useMovieTrailer = () => {
//   const dispatch = useDispatch();

//   const getMovieVideos = async (movieId) => {
//     if (!movieId) return null;
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
//       return trailer;
//     } catch (error) {
//       console.error("Failed to fetch movie trailer", error);
//       return null;
//     }
//   };

//   return getMovieVideos;
// };

// export default useMovieTrailer;
