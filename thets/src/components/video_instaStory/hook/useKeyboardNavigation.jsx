import { useEffect } from "react";

const useKeyboardNavigation = (onLeft, onRight, onEscape , isAllowToTrackEvent) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          onLeft();
          break;
        case "ArrowRight":
          onRight();
          break;
        case "Escape":
          onEscape();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [onLeft, onRight, onEscape]);
};
export default useKeyboardNavigation;
