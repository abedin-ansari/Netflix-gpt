import Footer from "./Footer";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-56 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
        <MovieList title={"Populer"} movies={movies.populerMovies} />
        {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SecondaryContainer;
