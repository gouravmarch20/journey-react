import { useEffect } from "react";

import { ToastProps } from "./toastInterface";

const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      onClick={onClose} // Instant close on click
      style={{
        position: "relative",
        padding: "10px 20px",
        backgroundColor:
          type === "success" ? "green" : type === "error" ? "red" : "blue",
        color: "white",
        borderRadius: "5px",
        fontSize: "14px",
        cursor: "pointer", // Indicate clickable behavior
        zIndex: 1000,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
