"use client";
import React, { useState } from "react";
import Toast from "./Toast";
import { ToastT } from "./toastInterface";

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastT[]>([]);

  const addToast = (message: string, type: "success" | "error" | "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}

      <div className="fixed bottom-5 left-5 flex gap-3">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => addToast("Success Message", "success")}
        >
          Show Success
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => addToast("Error Message", "error")}
        >
          Show Error
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => addToast("Info Message", "info")}
        >
          Show Info
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
