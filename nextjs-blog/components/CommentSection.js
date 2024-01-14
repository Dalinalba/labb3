// components/CommentSection.js
import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="newComment">Add a comment:</label>
        <textarea
          id="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
