import React, { Component } from 'react';
import '../styles/ArticleCard.css';
import { Link } from '@reach/router';
import { Textfit } from 'react-textfit';
import * as utils from '../utils';

class ArticleCard extends Component {
  render() {
    const {
      article_id,
      title,
      author,
      comment_count,
      votes
    } = this.props.article;
    const { username } = this.props;
    return (
      <Link to={`/articles/${article_id}`} style={{ textDecoration: 'none' }}>
        <div className={`articleCard`}>
          <Textfit style={{ height: '150px' }} mode="multi" max={70}>
            {title.toLowerCase()}
          </Textfit>
          <div className="cardData">
            <div className={`author ${username === author ? 'user' : null}`}>
              by {author}
            </div>
            <p>{`commments: ${comment_count} votes: ${votes}`}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ArticleCard;
