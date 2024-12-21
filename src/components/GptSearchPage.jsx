import GptMovieSuggesions from "./GptMovieSuggesions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
          alt="Background Image"
          aria-hidden="true"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggesions />
      </div>
    </>
  );
};

export default GptSearchPage;
