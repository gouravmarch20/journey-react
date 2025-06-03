import React from "react";
import AddNotes from "./AddNotes";
import NoteListing from "./NoteListing";

const NotesArea = ({ allInfo , handleAddAllInfo  , handleEditNoteInfo }) => {
  console.log("allInfo" , allInfo)
  return (
    <div>
      <AddNotes  handleAddAllInfo={handleAddAllInfo}  />
      <NoteListing allInfo={allInfo} handleEditNoteInfo={handleEditNoteInfo}/>
    </div>
  );
};

export default NotesArea;
