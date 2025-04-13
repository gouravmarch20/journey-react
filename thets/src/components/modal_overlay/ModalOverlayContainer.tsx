"use client";
import React, { useState } from "react";
import Modal from "./Modal";
const ModalOverlayContainer = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <div className="h-[100vh] bg-white text-black">
        {/* <h1>ModalOverlayContainer</h1> */}
        <button
          type="button"
          className="bg-amber-400"
          onClick={() => setModal(true)}
        >
          Open Modal
        </button>
        {modal && <Modal title={"Modla"} onClose={() => setModal(false)} />}
      </div>
    </>
  );
};

export default ModalOverlayContainer;
