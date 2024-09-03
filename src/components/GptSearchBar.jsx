// import { useDispatch, useSelector } from "react-redux";
// import lang from "../../utils/languageConstants";
// import { useRef } from "react";
// import openAi from "../../utils/openAi";
// import { API_OPTIONS } from "../../utils/constants";
// import { addGptMovieResult } from "../../utils/gptSlice";

// const GptSearchBar = () => {
//   const langChange = useSelector((store) => store.config.lang);
//   const searchText = useRef(null);
//   const dispatch = useDispatch();

//   // Search movie in TMDB
//   const searchMovieTmdb = async (movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" +
//         movie +
//         "&include_adult=false&language=en-US&page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     return json.results;
//   };

//   const handleGptSearchClick = async () => {
//     // Make an API call to GPT API and get results

//     const gptQuery =
//       "Act as a Movie Reccomendation System and suggest some movie for the query :" +
//       searchText.current.value +
//       "only give me names of five movies, comma seperated like example ahead. Example Results : War, Kill, Jawan, Kick, Bang Bang";

//     const gptResults = await openAi.chat.completions.create({
//       messages: [{ role: "user", content: gptQuery }],
//       model: "gpt-3.5-turbo",
//     });
//     (gptResults.choices?.[0]?.message?.content);
//     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

//     const promisArray = gptMovies.map((movie) => searchMovieTmdb(movie));
//     const tmdbResults = await Promise.all(promisArray);
//     (tmdbResults);
//     dispatch(
//       addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
//     );
//   };

//   return (
//     <div className="pt-[10%] flex justify-center">
//       <form
//         className="bg-black w-1/3 grid grid-cols-12"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={searchText}
//           className="p-4 m-4 col-span-9"
//           type="text"
//           placeholder={lang[langChange].GptSearchPlaceholder}
//         />
//         <button
//           className="px-4 py-2 col-span-3 m-4 bg-red-500 text-white rounded-lg"
//           onClick={handleGptSearchClick}
//         >
//           {lang[langChange].search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;

import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addSearchedMovies } from "../../utils/movieSlice";

const GptSearchBar = () => {
  const langChange = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const movieQuery = searchText.current.value;

    // Directly search movie in TMDB using the search text
    const tmdbResults = await searchMovieTmdb(movieQuery);

    // Dispatch results using the renamed action addSearchedMovies
    dispatch(
      addSearchedMovies({
        movieNamesTmdb: movieQuery,
        moviesResultsTmdb: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[50%] md:pt-[12%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/3 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langChange].GptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 col-span-3 m-4 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
