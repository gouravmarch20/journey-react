// useStoryNavigator.js
import { useState, useCallback } from "react";
import { stories } from "../data/story";

export default function useStoryNavigator() {
  const [currentStory, setCurrentStory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [seenStories, setSeenStories] = useState([]);

  const handleActiveStory = useCallback((s, type, initIndex = 0) => {
    const index = stories.findIndex((st) => st._id === s._id);
    if (index === -1) return;
    const prev = index > 0 ? stories[index - 1] : null;
    const next = index < stories.length - 1 ? stories[index + 1] : null;

    setSeenStories((prev) => [...new Set([...prev, s._id])]);
    setCurrentStory({ prev, curr: stories[index], next });
    setCurrentImageIndex(initIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (currentStory?.curr?.uploadImg?.length - 1 > currentImageIndex) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      setCurrentStory(null);
      if (!currentStory?.next) return;
      handleActiveStory(currentStory?.next, "next", 0);
    }
  }, [currentStory, currentImageIndex, handleActiveStory]);

  const handlePrev = useCallback(() => {
    if (currentImageIndex <= 0) {
      if (!currentStory?.prev) return;
      handleActiveStory(
        currentStory?.prev,
        "prev",
        currentStory?.prev?.uploadImg?.length - 1
      );
    } else {
      setCurrentImageIndex((prev) => prev - 1);
    }
  }, [currentStory, currentImageIndex, handleActiveStory]);

  const closeStory = () => {
    setCurrentStory(null);
    setCurrentImageIndex(0);
  };

  return {
    currentStory,
    currentImageIndex,
    seenStories,
    handleActiveStory,
    handleNext,
    handlePrev,
    closeStory,
  };
}