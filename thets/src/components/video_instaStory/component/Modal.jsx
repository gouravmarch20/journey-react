
import React from "react";
import "./Modal.css";
const Modal = ({ title, onClose, content, footer }) => {
  return (
    <div id="modal-overlay" className="modal-overlay">
      <div className=" modal p-4 rounded-md">
        <div>{title}</div>
        <div>{content}</div>
        <div>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
