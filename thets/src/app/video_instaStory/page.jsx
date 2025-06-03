"use client";
import Aside from "@/components/video_instaStory/Aside";
import VideoList from "@/components/video_instaStory/VideoList";

import Story from "@/components/video_instaStory/Story";
export default function Home() {
  return (
    <>
      <div className="flex  ">
        <div className="basis-[15vw]">
          <Aside />
        </div>
        <div className="flex-1  ">
          <Story />
          {/* <VideoList /> */}
        </div>
      </div>
    </>
  );
}

