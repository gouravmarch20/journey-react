import React, { useState, useRef } from "react";
import { commentsData } from "./commentData";

const CommentCard = ({ comment, onReply, onEdit, onDelete, onVote }) => {
  const { id, name, text, reply = [], votes = 0 } = comment;
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState(text);
  const [areRepliesCollapsed, setAreRepliesCollapsed] = useState(false); // State to track if replies are collapsed

  const handleReply = () => {
    if (input.trim()) {
      onReply(id, input.trim());
      setInput("");
      setIsReplying(false);
    }
  };

  const handleEdit = () => {
    if (editInput.trim()) {
      onEdit(id, editInput.trim());
      setIsEditing(false);
    }
  };

  const toggleReplies = () => setAreRepliesCollapsed(!areRepliesCollapsed); // Toggle collapse of replies

  return (
    <div className="bg-blue-100 rounded p-3 mb-3">
      <div className="flex justify-between">
        <h3 className="font-bold">{name}</h3>
        <div className="flex space-x-2">
          <button onClick={() => onVote(id, 1)} className="text-green-500">
            ⬆️
          </button>
          <span>{votes}</span>
          <button onClick={() => onVote(id, -1)} className="text-red-500">
            ⬇️
          </button>
        </div>
      </div>
      {isEditing ? (
        <>
          <textarea
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className="w-full border rounded p-1"
          />
          <button onClick={handleEdit} className="text-blue-500">
            Save
          </button>
        </>
      ) : (
        <p className="ml-3">{text}</p>
      )}
      <div className="flex space-x-2 mt-2 text-sm">
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="text-blue-600"
        >
          Reply
        </button>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-yellow-600"
        >
          Edit
        </button>
        <button onClick={() => onDelete(id)} className="text-red-600">
          Delete
        </button>
      </div>
      {isReplying && (
        <div className="mt-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded p-1"
          />
          <button onClick={handleReply} className="text-blue-500">
            Submit
          </button>
        </div>
      )}
      {/* Collapse button for replies */}
      {reply.length > 0 && (
        <button onClick={toggleReplies} className="text-blue-500 mt-2">
          {areRepliesCollapsed ? "... Show Replies" : "... Collapse"}
        </button>
      )}
      <div className="pl-5 border-l-2 border-blue-300 mt-3">
        {!areRepliesCollapsed &&
          reply.map((child) => (
            <CommentCard
              key={child.id}
              comment={child}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              onVote={onVote}
            />
          ))}
      </div>
    </div>
  );
};

const CommentsList = ({ comments, ...handlers }) =>
  comments.map((comment) => (
    <CommentCard key={comment.id} comment={comment} {...handlers} />
  ));

const Comment = () => {
  const [comments, setComments] = useState(commentsData);
  const [sortByVotes, setSortByVotes] = useState(false);
  const idCounter = useRef(100); // Start from 100 to avoid conflict with existing IDs

  const addReply = (list, parentId, text) => {
    return list.map((item) => {
      if (item.id === parentId) {
        const newReply = {
          id: idCounter.current++,
          name: "You",
          text,
          reply: [],
          votes: 0,
        };
        return { ...item, reply: [...item.reply, newReply] };
      }
      return { ...item, reply: addReply(item.reply, parentId, text) };
    });
  };

  const editComment = (list, id, newText) =>
    list.map((item) =>
      item.id === id
        ? { ...item, text: newText }
        : { ...item, reply: editComment(item.reply, id, newText) }
    );

  const deleteComment = (list, id) =>
    list
      .filter((item) => item.id !== id)
      .map((item) => ({ ...item, reply: deleteComment(item.reply, id) }));

  const voteComment = (list, id, delta) =>
    list.map((item) =>
      item.id === id
        ? { ...item, votes: item.votes + delta }
        : { ...item, reply: voteComment(item.reply, id, delta) }
    );

  const handleReply = (parentId, text) => {
    setComments((prev) => addReply(prev, parentId, text));
  };

  const handleEdit = (id, newText) => {
    setComments((prev) => editComment(prev, id, newText));
  };

  const handleDelete = (id) => {
    setComments((prev) => deleteComment(prev, id));
  };

  const handleVote = (id, delta) => {
    setComments((prev) => voteComment(prev, id, delta));
  };

  const sortedComments = sortByVotes
    ? [...comments].sort((a, b) => b.votes - a.votes)
    : comments;

  return (
    <div className="m-5 p-2">
      <button
        onClick={() => setSortByVotes((prev) => !prev)}
        className="mb-5 p-2 bg-blue-500 text-white rounded"
      >
        {sortByVotes ? "Sort by Latest" : "Sort by Votes"}
      </button>
      <CommentsList
        comments={sortedComments}
        onReply={handleReply}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onVote={handleVote}
      />
    </div>
  );
};

export default Comment;
