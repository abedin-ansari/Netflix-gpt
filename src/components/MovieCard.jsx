import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constants";
import { setSelectedMovie, setTrailerVideo } from "../../utils/movieSlice";
import useMovieTrailer from "../CustomHook/useMovieTrailer";

const MovieCard = ({ movie, handlePlayClick }) => {
  const dispatch = useDispatch();
  const fetchTrailer = useMovieTrailer(); // Custom hook to fetch trailer video

  const handleClick = async () => {
    dispatch(setSelectedMovie(movie));

    // Fetch the trailer video for the selected movie
    const trailer = await fetchTrailer(movie.id);
    dispatch(setTrailerVideo(trailer));
  };

  if (!movie.poster_path) return null;

  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handleClick}>
      <img src={IMG_CDN_URL + movie.poster_path} alt="movieCard" />

      <button
        className="bg-transparent text-white text-xs md:text-lg py-1 px-3 md:py-3 md:px-10 rounded border border-white"
        onClick={() => handlePlayClick(movie)}
      >
        Play Trailer
      </button>
    </div>
  );
};

export default MovieCard;
