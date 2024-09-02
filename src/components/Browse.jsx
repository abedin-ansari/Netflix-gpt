import { useSelector } from "react-redux";
import useNowPlayingMovies from "../CustomHook/useNowPlayingMovies";
import usePopulerMovies from "../CustomHook/usePopulerMovies";
import useTopratedMovies from "../CustomHook/useTopratedMovies";
import useUpcomingMovies from "../CustomHook/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies(); // Custom Hooks
  usePopulerMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
