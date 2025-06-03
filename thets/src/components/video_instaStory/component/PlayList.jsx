import React from "react";
import { playListsData } from "../../data/playlist.js";

const PlaylistList = () => {
  return (
    <div className="flex gap-2 ">
      {playListsData?.map((pl) => (
        <div
          className="w-[250px] h-[150px]  border  border-double border-blue-500 flex  flex-col justify-center items-center relative
    "
        >
          <div className="absolute top-2 right-2"> edit </div>

          <h5> {pl.title} </h5>
          <h5> {pl.linkedVideos.length} </h5>
        </div>
      ))}
    </div>
  );
};
export default PlaylistList;
