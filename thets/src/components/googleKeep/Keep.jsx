"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import NotesArea from "./components/NotesArea";
import { keepData } from "./data/keepData";

const Keep = () => {
  const generateRandomId = () => {
    return Number(Date.now() + Math.random() * 1000);
  };
  const [allInfo, setAllInfo] = useState(keepData);
  const handleAddAllInfo = useCallback(
    (labelName = "All", content, color = "") => {
      let isFounder = false;
      let founded = allInfo?.map((info) => {
        if (info.labelN == labelName) {
          isFounder = true;
          return {
            ...info,
            notes: [
              ...info.notes,
              {
                _id: generateRandomId(),
                text: content,
                userPickedColor: color,
                parentRefId: info._id,
              },
            ],
          };
        }
        return info;
      });
      if (isFounder == false) {
        const newId = generateRandomId();
        const r = {
          _id: newId,
          labelN: labelName,
          notes: [
            {
              _id: generateRandomId(),
              text: content,
              userPickedColor: color,
              parentRefId: newId,
            },
          ],
        };

        founded = [...founded, r];
      }
      setAllInfo(founded);
    },
    []
  );

  const handleEditNoteInfo = (editNote) => {
    console.log("thei", editNote);

    const updatedAllInfo = allInfo.map((tem) => {
      if (tem._id === editNote.parentRefId) {
        const updatedNotes = tem.notes.map((n) =>
          n._id === editNote._id ? { ...n, ...editNote } : n
        );
        return {
          ...tem,
          notes: updatedNotes,
        };
      }
      return tem; // untouched item
    });

    setAllInfo(updatedAllInfo);
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      <Header />

      <div className="grid gap-1 grid-cols-8 ">
        <div className="col-span-1">
          <Aside allInfo={allInfo} />
        </div>
        <div className="col-span-7">
          <NotesArea
            allInfo={allInfo}
            handleAddAllInfo={handleAddAllInfo}
            handleEditNoteInfo={handleEditNoteInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Keep;
