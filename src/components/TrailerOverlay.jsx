import { useDispatch, useSelector } from "react-redux";
import { setIsTrailerPlaying } from "../../utils/movieSlice";

const TrailerOverlay = () => {
  const dispatch = useDispatch();
  const isTrailerPlaying = useSelector(
    (store) => store.movies.isTrailerPlaying
  );
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  if (!isTrailerPlaying || !trailerVideo) return null;

  const handleClose = () => {
    dispatch(setIsTrailerPlaying(false));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded"
          onClick={handleClose}
        >
          Close
        </button>
        <iframe
          className="w-[80vw] h-[45vw] md:w-[60vw] md:h-[35vw] aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerOverlay;
