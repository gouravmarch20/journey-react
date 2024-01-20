import React from "react"
import { commentsData } from "./commentData"

const CommentCard = ({ comments }) => {
  const { name, comment, reply } = comments
  console.log(reply)
  return (
    <div className=" mb-4 shadow-lg bg-blue-400  ">

      <h3>{name}</h3>
      <h6 className="ml-3">{comment}</h6>

      {/* <Comments List className="ml-14" comments={reply} /> */}


    </div>
  )
}
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
   
    <CommentCard comments={comment} className="ml-14" />
        <div className="pl-5 border-l border-l-blue-500 ml-5 ">
            <CommentsList comments={comment.reply} />
        </div>
    </div>
  ))
}
const Comment = () => {
  return (
    <div>
    
      {/* <div className="w-10/12 m-auto"> */}
      <div className="m-5 p-2">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  )
}

export default Comment
