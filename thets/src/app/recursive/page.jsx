"use client";
import React from "react";
import CommentFlow from "./nestedComment/CommentFlow";
import FileFolder from "./fileFolder/FileFolder.jsx";
const page = () => {
  return (
    <div>
      {/* <CommentFlow /> */}
      <FileFolder />
    </div>
  );
};

export default page;
