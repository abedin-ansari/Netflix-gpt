// import { useDispatch } from "react-redux";
// import { setIsTrailerPlaying, setSelectedMovie } from "../../utils/movieSlice";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   const dispatch = useDispatch();
//   if (!movies || movies.length === 0) return <p>No movies found.</p>;

//   const handlePlayClick = (movie) => {
//     dispatch(setSelectedMovie(movie));
//     dispatch(setIsTrailerPlaying(true));
//   };

//   return (
//     <div className="px-5 text-white">
//       <h1 className="py-2 text-lg md:text-3xl ">{title}</h1>
//       <div className="flex overflow-x-scroll">
//         <div className="flex">
//           {movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               movie={movie}
//               handlePlayClick={handlePlayClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import { useDispatch } from "react-redux";
import { setIsTrailerPlaying, setSelectedMovie } from "../../utils/movieSlice";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  const handlePlayClick = (movie) => {
    dispatch(setSelectedMovie(movie));
    dispatch(setIsTrailerPlaying(true));
  };

  return (
    <div className="px-5 text-white">
      <h1 className="py-2 text-lg md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
