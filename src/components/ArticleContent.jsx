import React from 'react';
import '../styles/ArticleContent.css';
import moment from 'moment';
import { Textfit } from 'react-textfit';
import Voter from './/Voter';
import * as utils from '../utils';
import Deleter from './Deleter';

const ArticleContent = ({ article, toggleVotes, username, deleteArticle }) => {
  const {
    title,
    author,
    body,
    comment_count,
    votes,
    created_at,
    article_id
  } = article;
  const m = moment(created_at).calendar();
  return (
    <div className="articleContent">
      <div className="articleTop">
        <Textfit style={{ flex: '1', height: '100%' }} mode="multi" max={70}>
          {title}
        </Textfit>
      </div>
      <div className="articleBody">{body}</div>
      <div className="articleData">
        <Voter toggleVotes={toggleVotes} votes={votes} />
        {username === author ? (
          <Deleter article_id={article_id} deleteArticle={deleteArticle} />
        ) : null}
        <div className="innerData">
          <div>
            {utils.formatArticleData([author, m, votes, comment_count])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
