import { BG_IMG_SRCSET, BG_IMG_URL } from "../../utils/constants";
import GptMovieSuggesions from "./GptMovieSuggesions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG_URL}
          srcSet={BG_IMG_SRCSET}
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
