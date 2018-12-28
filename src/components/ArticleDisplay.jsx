import React, { Component } from 'react';
import * as api from '../api/api';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import '../styles/ArticleDisplay.css';

class ArticleDisplay extends Component {
  state = {
    article: {}
  };
  render() {
    const { id, user_id, username } = this.props;
    const { article } = this.state;
    return (
      <div className="articleDisplay">
        <ArticleContent article={article} />
        <ArticleComments id={id} username={username} user_id={user_id} />
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticleById(this.props.id).then(article => {
      this.setState({ article });
    });
  }
}

export default ArticleDisplay;
