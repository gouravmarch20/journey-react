import React, { useState } from "react";
import explorerData from "./data";

// Helper function to recursively add item in correct node
const insertNode = (tree, folderId, itemName, isFolder) => {
  if (tree.id === folderId && tree.isFolder) {
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      isFolder: isFolder,
      items: isFolder ? [] : [],
    };
    return {
      ...tree,
      items: [...tree.items, newItem],
    };
  }

  return {
    ...tree,
    items: tree.items.map((child) =>
      child.isFolder ? insertNode(child, folderId, itemName, isFolder) : child
    ),
  };
};

const FileEx = ({ data, handleInsert }) => {
  const [expand, setExpand] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [isFolder, setIsFolder] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleBlurOrEnter = () => {
    if (inputValue) {
      handleInsert(data.id, inputValue, isFolder);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <div className="ml-4">
      <div className="flex gap-2 items-center">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => setExpand((prev) => !prev)}
        >
          📁 {data.name}
        </span>
        {data.isFolder && (
          <>
            <button
              onClick={() => {
                setInputVisible(true);
                setIsFolder(true);
                setExpand(true);
              }}
            >
              + Folder
            </button>
            <button
              onClick={() => {
                setInputVisible(true);
                setIsFolder(false);
                setExpand(true);
              }}
            >
              + File
            </button>
          </>
        )}
      </div>

      {inputVisible && (
        <div className="ml-4 my-1">
          <input
            type="text"
            className="border px-2 py-1"
            placeholder={`Enter ${isFolder ? "folder" : "file"} name`}
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlurOrEnter}
            onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter()}
          />
        </div>
      )}

      {expand &&
        data.items?.map((child) => (
          <FileEx key={child.id} data={child} handleInsert={handleInsert} />
        ))}
    </div>
  );
};

const FileFolder = () => {
  const [explorer, setExplorer] = useState(explorerData);

  const handleInsert = (folderId, name, isFolder) => {
    const updatedTree = insertNode(explorer, folderId, name, isFolder);
    setExplorer(updatedTree);
  };

  return (
    <div className="p-4 font-mono">
      <h1 className="text-xl font-bold mb-4">📂 File Explorer</h1>
      <FileEx data={explorer} handleInsert={handleInsert} />
    </div>
  );
};

export default FileFolder;
