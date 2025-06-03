"use client";

import React, { useState } from "react";
import Video from "./component/Video";
import Modal from "./component/Modal";
import { videos } from "./data/videos";
import { playListsData } from "./data/playlist.js";

 const VideoList = () => {
  const [editPlaylist, setEditPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState(playListsData);
  const handleAddToPlaylist = (video) => {
    setEditPlaylist(video);
  };
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);
  const handlePlaylist = (e, playlist) => {
     let tempSelectedPlaylist = [...selectedPlaylist];

    if (e.target.checked) {
      tempSelectedPlaylist.push(playlist._id);
    } else {
      tempSelectedPlaylist = tempSelectedPlaylist.filter(
        (id) => id != playlist._id
      );
    }
    setSelectedPlaylist(tempSelectedPlaylist);
  };
  const doNeedToAddVideo = (playlist) => {
    return selectedPlaylist.includes(playlist._id);
  };

  const handleSavePlaylist = () => {
    const videoId = editPlaylist._id;
    const t1 = playlists.map((p) =>
      doNeedToAddVideo(p)
        ? { ...p, linkedVideos: [...p.linkedVideos, videoId] }
        : p
    );
    console.log("add", t1);
    setPlaylists(t1);
    setSelectedPlaylist([]);
    setEditPlaylist(null);
  };
  const onClose = () => {
    setSelectedPlaylist([]);
    setEditPlaylist(null);
  };
  const isAlreadyAdd = (playlist) => {
    return playlist.linkedVideos.includes(editPlaylist._id);
  };
   return (
    <div className="videolist">
      {videos?.map((video) => (
        <div key={video._id}>
          <Video video={video} handleAddToPlaylist={handleAddToPlaylist} />
        </div>
      ))}

      {editPlaylist && (
        <Modal
          title={"Create Playlist"}
          onClose={onClose}
          content={
            <>
              {playlists?.map((play) => (
                <div
                  key={play._id}
                  className="p-1 flex items-center gap-2 w-[40%] justify-between"
                >
                  <label htmlFor={play._id}>{play.title}</label>
                  <input
                    type="checkbox"
                    id={play._id}
                    checked={
                      selectedPlaylist.includes(play._id) || isAlreadyAdd(play)
                        ? true
                        : false
                    }
                    onChange={(e) => handlePlaylist(e, play)}
                    disabled={isAlreadyAdd(play)}
                  />
                </div>
              ))}
            </>
          }
          footer={
            <div className="flex gap-2  bg-green-200 py-2">
              <button onClick={onClose}> Cancel </button>
              <button onClick={handleSavePlaylist}> Save </button>
            </div>
          }
        />
      )}
    </div>
  );
};
export default VideoList;
