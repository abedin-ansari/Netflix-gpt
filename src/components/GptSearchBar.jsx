import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addSearchedMovies } from "../../utils/movieSlice";

const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.config.lang);
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
    if (!movieQuery.trim()) return;

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

  const getPlaceholderText = () => {
    switch (currentLang) {
      case "hi":
        return "आज आप क्या देखना या स्ट्रीम करना चाहेंगे?";
      case "es":
        return "¿Qué te gustaría ver o transmitir hoy?";
      default:
        return "What would you like to watch or stream today?";
    }
  };

  const getSearchButtonText = () => {
    switch (currentLang) {
      case "hi":
        return "खोज";
      case "es":
        return "Buscar";
      default:
        return "Search";
    }
  };

  return (
    <div className="pt-[50%] md:pt-[12%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 lg:w-1/3 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg bg-gray-700 text-white placeholder-gray-300"
          type="text"
          placeholder={getPlaceholderText()}
          required
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
          <i className="fas fa-search text-sm"></i>
          <span>{getSearchButtonText()}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
