const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen aspect-video pt-[13%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="py-4 w-1/3 text-xs">{overview}</p>
      <div>
        <button className="bg-transparent text-white text-lg py-2 px-6 cursor-pointer transition duration-1000 ease-in-out hover:scale-110 transform backdrop-blur-md border border-white rounded-lg">
          ▶️Play
        </button>

        {/* <button className="bg-white text-black font-bold text-lg rounded-lg p-7 py-2">
          ▶️Play
        </button> */}
        <button className="bg-gray-500 text-white p-5 py-2 ml-4 rounded-lg text-lg hover:bg-gray-600">
          ❕More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
