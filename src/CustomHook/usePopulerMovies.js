import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopulerMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const populerMovies = useSelector((store) => store.movies.populerMovies);

  const getPopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopulerMovies(json.results));
  };

  useEffect(() => {
    !populerMovies && getPopulerMovies();
  }, []);
};

export default usePopulerMovies;
