"use client";

import React, { useState } from "react";
import "./toast.css";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  key: number;
  type: ToastType;
  message: string;
}

interface Props {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  stackDirection?: "up" | "down";
}

const ToastManager: React.FC<Props> = ({
  position = "top-right",
  stackDirection = "down",
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const key = Date.now();
    const newToast: Toast = { key, type, message };

    setToasts((prev) =>
      stackDirection === "up" ? [newToast, ...prev] : [...prev, newToast]
    );

    setTimeout(() => removeToast(key), 4000);
  };

  const removeToast = (key: number) => {
    setToasts((prev) => prev.filter((toast) => toast.key !== key));
  };

  return (
    <div className="toast-wrapper">
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => showToast("success", "Success!")}>
          Success
        </button>
        <button onClick={() => showToast("error", "Error!")}>Error</button>
        <button onClick={() => showToast("info", "Info!")}>Info</button>
        <button onClick={() => showToast("warning", "Warning!")}>
          Warning
        </button>
      </div>

      <div className={`toast-container ${position}`}>
        {toasts.map((toast) => (
          <div key={toast.key} className={`toast ${toast.type}`}>
            {toast.message}
            <button
              className="close-btn"
              onClick={() => removeToast(toast.key)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastManager;
