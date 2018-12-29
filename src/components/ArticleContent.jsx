import React from 'react';
import '../styles/ArticleContent.css';
import moment from 'moment';
import { Textfit } from 'react-textfit';
import Voter from './/Voter';

const ArticleContent = ({ article, toggleVotes }) => {
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
      </div>
      <div className="articleBody">{body}</div>
      <div className="articleData">
        <Voter toggleVotes={toggleVotes} />
        <div className="innerData">
          {' '}
          {`posted by "${author}", ${m}, ${votes} votes, ${comment_count} comments.`}{' '}
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
