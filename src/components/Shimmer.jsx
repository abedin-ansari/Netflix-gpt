const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {Array(18)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card bg-gray-400 h-[50px] w-[30px] md:h-[250px] md:w-[180px] m-4 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
