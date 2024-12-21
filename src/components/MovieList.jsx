import { useDispatch } from "react-redux";
import { setIsTrailerPlaying, setSelectedMovie } from "../../utils/movieSlice";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handlePlayClick = (movie) => {
    dispatch(setSelectedMovie(movie));
    dispatch(setIsTrailerPlaying(true));
  };

  // Auto scroll functionality
  useEffect(() => {
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust this value to control speed

    const animate = () => {
      if (!isDragging && sliderRef.current) {
        const maxScroll =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        scrollPosition += scrollSpeed;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        sliderRef.current.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const isDuplicate = window.innerWidth > 768; // Only duplicate on desktop

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 bg-black">
      <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handlePlayClick={handlePlayClick}
            />
          ))}
          {/* Only duplicate on desktop */}
          {isDuplicate &&
            movies?.map((movie) => (
              <MovieCard
                key={`${movie.id}-duplicate`}
                movie={movie}
                handlePlayClick={handlePlayClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
