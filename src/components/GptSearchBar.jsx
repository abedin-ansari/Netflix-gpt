import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";

const GptSearchBar = () => {
  const langChange = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/3 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langChange].GptSearchPlaceholder}
        />
        <button className="px-4 py-2 col-span-3 m-4 bg-red-500 text-white rounded-lg">
          {lang[langChange].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
