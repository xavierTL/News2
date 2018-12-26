import React from 'react';
import '../styles/ArticleContent.css';
import moment from 'moment';

const ArticleContent = ({ article }) => {
  const { title, author, body, comment_count, votes, created_at } = article;
  const m = moment(created_at).calendar();
  return (
    <div className="articleContent">
      <div className="articleTop">
        <h2 className="articleHeader">{title}</h2>
        <div className="author">- {`posted by "${author}", ${m}`} </div>
      </div>
      <div className="articleBody">{body}</div>
      <div className="articleData">
        {`${votes} votes, ${comment_count} comments.`}
      </div>
    </div>
  );
};

export default ArticleContent;
