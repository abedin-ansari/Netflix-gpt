import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { setSelectedMovie } from "../../utils/movieSlice";
import useMovieTrailer from "../CustomHook/useMovieTrailer";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const selectedMovie = useSelector((store) => store.movies.selectedMovie);

  const trailerVideo = useMovieTrailer(selectedMovie ? selectedMovie.id : null);

  // Set the default movie on initial load if not already selected
  useEffect(() => {
    if (!selectedMovie && movies && movies.length > 0) {
      dispatch(setSelectedMovie(movies[0])); // Set the 0th index movie as default
    }
  }, [dispatch, selectedMovie, movies]);

  if (!selectedMovie) return null;

  const { original_title, overview, id } = selectedMovie;

  return (
    <div className="pt-[32%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      {/* Pass the movieId prop correctly to VideoBackground */}
      <VideoBackground movieId={id} trailer={trailerVideo} />
    </div>
  );
};

export default MainContainer;
