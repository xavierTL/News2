import React from 'react';
import '../styles/ArticleComments.css';

const CommentsWheel = ({ comments, username, deleteComment }) => {
  return (
    <div className="commentsContainer">
      {comments.map(comment => (
        <div key={comment.comment_id} className="commentContainer">
          <div className="commentBody">"{comment.body}"</div>
          <div className="commentAuthor">
            -{comment.author}
            {username === comment.author ? (
              <div className="deleteCommentContainer">
                <button
                  className="deleteCommentButton"
                  onClick={() => deleteComment(comment.comment_id)}
                >
                  delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsWheel;
