import React from 'react';
import '../styles/ArticleComments.css';
import moment from 'moment';

const CommentsWheel = ({ comments, username, deleteComment, hasResponded }) => {
  return (
    <div className="commentsContainer">
      {comments.length ? (
        comments.map(comment => {
          const { created_at, comment_id, body, author } = comment;
          const m = moment(created_at).calendar();
          return (
            <div key={comment_id} className="commentContainer">
              <div className="commentBody">"{body}"</div>
              <div className="commentAuthor">
                -{`${author}, ${m}`}
                {username === author ? (
                  <div className="deleteCommentContainer">
                    <button
                      className="deleteCommentButton"
                      onClick={() => deleteComment(comment_id)}
                    >
                      delete
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })
      ) : (
        <div className="noCommentCont">
          <div className="noComment">
            {hasResponded ? 'be the first to comment!' : 'loading...'}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsWheel;
