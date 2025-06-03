import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import NoteList from './NoteList'
const NoteListing = ({ allInfo = [] , handleEditNoteInfo}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("label");

  const list = useMemo(() => {
    if (search && search != "All") {

      return allInfo.find((kd) => kd.labelN === search)?.notes || [];

    } else {
      const allNote = [];
      allInfo?.forEach((k) => {
        k.notes?.forEach((k1) => {
          allNote.push(k1);
        });
      });
      return allNote;
    }
  }, [search , allInfo]);
  

  console.log("list", list);

  return (
    <div className="my-4">
      {list?.length ? (
        <div className="flex gap-4 ">
          {list.map((note) => (
            <NoteList key={note._id} note={note} handleEditNoteInfo={handleEditNoteInfo} />
           
          ))}

        </div>
      ) : (
        <>
          <div className="flex gap-4  justify-center items-center">
            <h2>No item found {search}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteListing;
