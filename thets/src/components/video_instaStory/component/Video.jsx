import React from "react";
const Video = ({ video, handleAddToPlaylist }) => {
  return (
    <div>
      <div className="relative">
        <img src={video.thumbnail} className="w-full" />

        <div className="absolute bottom-2 right-2 flex gap-2">
          <button className="bg-white p-2 rounded-sm shadow hover:bg-gray-100">
            ❤️
          </button>
          <button
            className="bg-white p-2 rounded-sm shadow hover:bg-gray-100"
            onClick={() => handleAddToPlaylist(video)}
          >
            ➕
          </button>
        </div>
      </div>

      <h3 className="font-light text-zinc-600 h-[50px]	overflow-hidden">
        {video.title}
      </h3>
      <h5 className="font-medium"> {video.channelName}</h5>
    </div>
  );
};
export default Video;

