import React from 'react';
import '../styles/ArticleContent.css';
import moment from 'moment';
import { Textfit } from 'react-textfit';

const ArticleContent = ({ article }) => {
  const { title, author, body, comment_count, votes, created_at } = article;
  const m = moment(created_at).calendar();
  return (
    <div className="articleContent">
      <div className="articleTop">
        <div className="articleHeader">
          <Textfit style={{ flex: '1' }} mode="multi" max={70}>
            {title}
          </Textfit>
        </div>
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
