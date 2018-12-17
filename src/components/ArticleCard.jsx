import React, { Component } from 'react';
import '../styles/ArticleCard.css';
import { Link } from '@reach/router';

class ArticleCard extends Component {
  render() {
    const {
      article_id,
      title,
      author,
      comment_count,
      votes
    } = this.props.article;
    return (
      <Link to={`/articles/${article_id}`}>
        <div className="articleCard">
          <p>"{title}"</p>
          <p>by {author}</p>
          <p>{comment_count}</p>
          <p>{votes}</p>
        </div>
      </Link>
    );
  }
}

export default ArticleCard;
