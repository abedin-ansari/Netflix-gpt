import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHook/useMovieTrailer";

const VideoBackground = () => {
  const selectedMovie = useSelector((store) => store.movies.selectedMovie);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Load the trailer for the selected movie
  useMovieTrailer(selectedMovie?.id);

  return (
    <div className="w-screen">
      <iframe
        className="w-[100vw] md:w-screen md:h-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
