import GptMovieSuggesions from "./GptMovieSuggesions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg"
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
