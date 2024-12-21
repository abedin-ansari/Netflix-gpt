import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { setTrailerVideo } from "../../utils/movieSlice";

// Cache object to store movie trailers
const trailerCache = new Map();

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async (movieId, retryCount = 2) => {
    if (!movieId) return null;

    // Check cache first
    if (trailerCache.has(movieId)) {
      dispatch(setTrailerVideo(trailerCache.get(movieId)));
      return trailerCache.get(movieId);
    }

    for (let attempt = 0; attempt < retryCount; attempt++) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            ...API_OPTIONS,
            cache: "force-cache", // Use browser's cache
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        if (!json.results?.length) return null;

        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];

        if (trailer) {
          // Store in cache
          trailerCache.set(movieId, trailer);
          dispatch(setTrailerVideo(trailer));
          return trailer;
        }
        return null;
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error);
        if (attempt === retryCount - 1) {
          dispatch(setTrailerVideo(null));
          return null;
        }
        // Short delay before retry
        await new Promise((resolve) => setTimeout(resolve, 500));
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
