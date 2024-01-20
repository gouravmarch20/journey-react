import React, { useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import { generate, randomString } from "../helper/comment"
import { useSelector, useDispatch } from "react-redux"
import { add } from "../store/slice/LiveCommentSlice"

const LiveChat = () => {
  const comments = useSelector((state) => state.comments.liveComments)
  const dispatch = useDispatch()
  const [userLiveComment, setUserLiveComment] = useState({
    name: "gourav<arch20",
    comment: "",
  })
  const handleClick = () => {
    dispatch(
      add(userLiveComment)
    )
  }
  useEffect(() => {
    const timer = setInterval(() => {
      // dispatch(
      //   add({
      //     name: generate(),
      //     comment: randomString(14),
      //   })
      // )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="">
      <div className="overflow-y-scroll bg-slate-400 h-[300px]  flex flex-col">
        {comments &&
          comments.map(({ name, comment }) => {
            return <CommentCard name={name} comment={comment} />
          })}
      </div>
      {/*  */}
      <div className="bg-cyan-100 mt-5">
        <input
          type="text"
          value={userLiveComment?.comment}
          onChange={(e) =>
            // setUserLiveComment((prev) => {
            //   prev.comment = e.target.value
            // })
            setUserLiveComment({ ...userLiveComment, comment: e.target.value })
          }
        />
        <button className="p-2 bg-cyan-500" onClick={() => handleClick()}>
          submit
        </button>
      </div>
      {/*  */}
    </div>
  )
}

export default LiveChat
