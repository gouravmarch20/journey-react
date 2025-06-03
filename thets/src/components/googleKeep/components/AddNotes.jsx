import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const AddNotes = ({  handleAddAllInfo }) => {
  const [isExpanded, setIsExpanded] = useState("");
  const [userInput, setUserInput] = useState("");
  const [title, setTitle] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("label") || "All";
  console.log("label", search);

  const handleSave = () => {
    handleAddAllInfo(search, userInput);
    setUserInput("");
    setIsExpanded(false);
  };ß
  return (
    <div className="mt-4">
      <div
        className="w-[60%] mx-auto bg-amber-50 p-2 rounded-2xl"
        onClick={() => setIsExpanded(true)}
      >
        {isExpanded ? "" : " Take note"}
        {isExpanded && (
          <div className="flex gap-2 items-center flex-col">
            {/* <div> */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-amber-600 p-2 rounded-2xl w-[80%]"
            />
            {/* </div> */}
            <textarea
              className="border border-amber-600 w-[80%]"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <div>
              <button
                className="border border-amber-950 p-2 rounded-2xl"
                onClick={handleSave}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNotes;
