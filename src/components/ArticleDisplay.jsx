import React, { Component } from 'react';
import * as api from '../api/api';

class ArticleDisplay extends Component {
  state = {
    article: {}
  };
  render() {
    return <div>{this.props.id}</div>;
  }
  componentDidMount() {
    api.fetchArticleById(this.props.id).then(article => {
      this.setState({ article });
    });
  }
}

export default ArticleDisplay;
