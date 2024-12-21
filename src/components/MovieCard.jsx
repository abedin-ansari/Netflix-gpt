import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constants";
import { setSelectedMovie, setTrailerVideo } from "../../utils/movieSlice";
import useMovieTrailer from "../CustomHook/useMovieTrailer";
import PropTypes from "prop-types";

const MovieCard = ({ movie, handlePlayClick }) => {
  const dispatch = useDispatch();
  const fetchTrailer = useMovieTrailer();

  const handleClick = async () => {
    dispatch(setSelectedMovie(movie));
    const trailer = await fetchTrailer(movie.id);
    dispatch(setTrailerVideo(trailer));
  };

  const onPlayClick = async (e) => {
    e.stopPropagation();
    const trailer = await fetchTrailer(movie.id);
    dispatch(setTrailerVideo(trailer));
    handlePlayClick(movie);
  };

  if (!movie.poster_path) return null;

  return (
    <div className="w-44 md:w-60 pr-3 transition-transform duration-300 hover:scale-105">
      <div className="relative group cursor-pointer" onClick={handleClick}>
        {/* Movie Poster */}
        <img
          className="w-full h-60 md:h-[22rem] rounded-lg object-cover"
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title || "Movie Poster"}
          loading="lazy"
          decoding="async"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 rounded-lg opacity-0 group-hover:opacity-100">
          {/* Movie Info Container */}
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            {/* Top Section - Title */}
            <h3 className="font-bold text-base md:text-lg text-white line-clamp-2">
              {movie.title}
            </h3>

            {/* Bottom Section - Info and Buttons */}
            <div className="text-white">
              {/* Release Date and Rating */}
              <div className="flex items-center justify-between text-xs md:text-sm mb-3">
                <span className="bg-red-600 px-2 py-1 rounded">
                  {movie.release_date?.split("-")[0]}
                </span>
                <span className="flex items-center bg-gray-800 px-2 py-1 rounded">
                  <i className="fas fa-star text-yellow-500 mr-1.5"></i>
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 px-3">
                <button
                  className="flex-1 bg-white hover:bg-gray-200 text-black py-2 px-3 rounded-md text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  onClick={onPlayClick}
                >
                  <i className="fas fa-play"></i>
                  Play
                </button>
                <button
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-md text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fas fa-info-circle"></i>
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  handlePlayClick: PropTypes.func.isRequired,
};

export default MovieCard;
