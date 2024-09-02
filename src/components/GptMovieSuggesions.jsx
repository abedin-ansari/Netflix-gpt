// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const GptMovieSuggesions = () => {
//   const gpt = useSelector((store) => store.gpt);
//   const { movieNames, movieResults } = gpt;

//   if (!movieNames) return null;

//   return (
//     <div className="p-4 m-4 bg-black text-white">
//       <div>
//         {movieNames.map((movieName, index) => (
//           <MovieList
//             key={movieName}
//             title={movieName}
//             movies={movieResults[index]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GptMovieSuggesions;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggesions = () => {
  const movie = useSelector((store) => store.movies);
  const { movieNamesTmdb, moviesResultsTmdb } = movie;

  // If no movie name or results are available, render nothing
  if (!movieNamesTmdb || !moviesResultsTmdb) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {/* Display the search query or title */}
      <h2>Movie Searched: {movieNamesTmdb}</h2>
      {/* Pass the search results to the MovieList component */}
      <MovieList title={movieNamesTmdb} movies={moviesResultsTmdb} />
    </div>
  );
};

export default GptMovieSuggesions;
