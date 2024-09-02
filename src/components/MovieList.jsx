import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // if (!movies) {
  //   return <p>Loading...</p>; // Or some loading component
  // }
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <div className="px-5 text-white">
      <h1 className="py-2 text-3xl ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   if (!movies) {
//     return <p>Loading...</p>; // Or some loading component
//   }

//   return (
//     <div className="px-5 text-white">
//       <h1 className="py-2 text-3xl">{title}</h1>
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         //spaceBetween={10} // Space between slides
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         loop={true}
//         modules={[Autoplay, EffectCoverflow]}
//         className="movieSwiper"
//       >
//         {movies.map((movie) => (
//           <SwiperSlide key={movie.id}>
//             <MovieCard posterPath={movie.poster_path} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MovieList;
