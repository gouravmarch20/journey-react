import React, { useState } from "react";

const NoteList = ({ note, handleEditNoteInfo }) => {
  const [userInput, setUserInput] = useState(note.text || "");

  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = (note) => {
  
    setIsEditable(true);
  };
  const handleEditClose = () => {
    setIsEditable(false);
  };
  const handleSave = (note) => {
    const tNote = { ...note, text: userInput };
    handleEditNoteInfo(tNote);
    handleEditClose();
  };
  return (
    <div className="h-[200px] w-[300px] border-2 border-amber-400 p-2 relative">
      {isEditable ? (
        <>
          <textarea
            className="border border-amber-600 w-[80%]"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <div className="flex gap-2">
            <button
              className="border border-amber-950 p-2 rounded-2xl"
              onClick={()=>handleSave(note)}
            >
              submit
            </button>
            <button
              className="border border-amber-950 p-2 rounded-2xl"
              onClick={handleEditClose}
            >
              cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <p>{note?.text}</p>
          <div
            className=" absolute right-[12px] bottom-[12px] ml-auto"
            onClick={() => handleEdit(note)}
          >
            Edit
          </div>
        </>
      )}
    </div>
  );
};

export default NoteList;
