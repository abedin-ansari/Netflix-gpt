import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { setTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId, retryCount = 3) => {
    if (!movieId) return null;

    for (let attempt = 0; attempt < retryCount; attempt++) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (!json.results?.length) {
          console.warn("No video results found for movie:", movieId);
          return null;
        }

        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        if (trailer) {
          dispatch(setTrailerVideo(trailer));
          return trailer;
        }

        throw new Error("No valid trailer found");
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);

        if (attempt === retryCount - 1) {
          console.error("All retry attempts failed for movie:", movieId);
          dispatch(setTrailerVideo(null));
          return null;
        }

        // Wait before retrying (exponential backoff)
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, attempt))
        );
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchTrailer = async () => {
      if (movieId && isMounted) {
        await getMovieVideos(movieId);
      }
    };

    fetchTrailer();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return getMovieVideos;
};

export default useMovieTrailer;
