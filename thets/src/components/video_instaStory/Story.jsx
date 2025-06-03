import React, { useState, useEffect, useCallback, useRef } from "react";
import { stories } from "./data/story";
import Modal from "./component/Modal";
import ProgressBar from "./component/ProgressBar";
import Image from "next/image";
import Arrow from "./component/Arrow";
import "./Story.css";
import useScroll from "./hook/useScroll";
import useKeyboardNavigation from "./hook/useKeyboardNavigation";
import useStoryNavigator from "./hook/useStoryNavigator";
import StoryModal from "./component/StoryModal";
const Story = () => {
  const scrollContainerRef = useRef(null);
  const storyRefs = useRef({});
  const { showLeftArrow, showRightArrow, scrollLeft, scrollRight } =
    useScroll(scrollContainerRef);

  const {
    currentStory,
    currentImageIndex,
    seenStories,
    handleActiveStory,
    handleNext,
    handlePrev,
    closeStory,
  } = useStoryNavigator();

  useKeyboardNavigation(handlePrev, handleNext, closeStory, currentStory?.curr);
  const onTimerEnd = () => {
    handleNext();
  };
  useEffect(() => {
    if (currentStory?.curr?._id && storyRefs.current[currentStory.curr._id]) {
      storyRefs.current[currentStory.curr._id].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentStory?.curr?._id]);
  const isModalOpen = !!currentStory;
  return (
    <>
      <div className=" w-[340px]    relative    ">
        {showLeftArrow && <Arrow type="left" onClick={scrollLeft} />}

        <div
          className={`flex gap-2 p-2 w-[300px] bg-amber-300 ${
            isModalOpen
              ? "pointer-events-none overflow-hidden"
              : "overflow-x-auto"
          }`}
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {stories.map((s) => (
            <div
              className="flex flex-col"
              key={s._id}
              onClick={() => handleActiveStory(s, "next", 0)}
              ref={(el) => (storyRefs.current[s._id] = el)}
            >
              <div
                className={` rounded-full ml-2 px-1 w-[70px] text-center border  flex justify-center  items-center ${
                  seenStories.includes(s._id) ? "border-grey" : "border-red-900"
                }  p-2 h-[70px]`}
              >
                {" "}
                <img
                  src={s.avatar}
                  alt={s.name}
                  // fill
                  className="rounded-full object-cover max-h-[60px]"
                  // loading="eager"
                  // quality={80}
                />
              </div>
              <h5 className="text-center font-medium ">
                {s.name.substring(0, 4)}..
              </h5>
            </div>
          ))}
        </div>
        {showRightArrow && <Arrow type="right" onClick={scrollRight} />}
      </div>

      {currentStory && (
        <StoryModal
          currentStory={currentStory}
          closeStory={closeStory}
          currentImageIndex={currentImageIndex}
          onTimerEnd={onTimerEnd}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </>
  );
};
export default Story;
