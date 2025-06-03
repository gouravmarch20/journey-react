import React from "react";
import Modal from "../component/Modal";
import ProgressBar from "../component/ProgressBar";

const StoryModal = ({
  currentStory,
  closeStory,
  currentImageIndex,
  onTimerEnd,
  handleNext,
  handlePrev
}) => {
  return (
    <Modal
      title={`Story:::  ${currentImageIndex}`}
      onClose={closeStory}
      content={
        <>
          <div className="flex gap-2 ">
            {currentStory?.curr?.uploadImg?.map((p, ind) => (
              <ProgressBar
                handleActiveStoryTimer={onTimerEnd}
                key={`progress_${ind}_${currentStory.curr._id}`}
                isActive={ind == currentImageIndex}
              />
            ))}
          </div>

          <div className="relative ">
            <div
              className="absolute  top-0 left-0  h-full flex items-center    w-1/4 "
              onClick={handlePrev}
            >
              {(currentStory?.prev || currentImageIndex != 0) && (
                <button
                  onClick={handlePrev}
                  className="cursor-pointer px-2 hover:bg-opacity-50 bg-black text-white"
                >
                  Prev
                </button>
              )}
            </div>
            <div className="flex justify-center">
              <img
                src={currentStory?.curr?.uploadImg?.[currentImageIndex]}
                className="w-[300px] h-[400px] object-contain"
              />
            </div>

            <div
              className="absolute  top-0 right-0  h-full flex items-center      "
              onClick={() => handleNext()}
            >
              {(currentStory?.next ||
                currentStory.curr.uploadImg.length - 1 > currentImageIndex) && (
                <button className="cursor-pointer px-2 hover:bg-opacity-50 bg-black text-white">
                  {" "}
                  Next{" "}
                </button>
              )}
            </div>
          </div>
        </>
      }
      footer={
        <div className="flex gap-2  bg-green-200 py-2">
          <button onClick={closeStory}> Cancel </button>
        </div>
      }
    ></Modal>
  );
};

export default StoryModal;
