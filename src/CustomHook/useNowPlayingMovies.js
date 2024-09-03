import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results)); // Update the Store
    } catch (error) {
      console.error("Failed to fetch now playing movies", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies(); // Fetch movies only if not present
    }
  }, []);
};

export default useNowPlayingMovies;
