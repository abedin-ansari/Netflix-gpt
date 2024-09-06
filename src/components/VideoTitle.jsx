import { useDispatch } from "react-redux";
import { setIsTrailerPlaying } from "../../utils/movieSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setIsTrailerPlaying(true));
  };

  return (
    <div className="w-screen h-screen aspect-video pt-[18%] md:pt-[11.5%] px-4 md:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-lg md:text-4xl">{title}</h1>
      <p className="hidden md:inline-block py-4 w-1/3 text-[1rem] leading-[1.5rem]">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button
          className="bg-transparent text-white text-xs md:text-lg py-1 px-3 md:py-3 md:px-10 rounded border border-white hover:bg-gray-700"
          onClick={handlePlayClick}
        >
          Play Trailer
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
