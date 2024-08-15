const VideoTitle = ({title,overview}) => {
    return (
      <div className=" w-[100%] aspect-video md:pt-[17%] pt-[40%] md:px-24 px-20 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl  md:text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="mt-5 md:mt-0">
          <button className=" bg-white text-black p-1 md:p-4 px-2 md:px-11 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 text-white p-1 md:p-4 px-2 md:px-11 md:text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;