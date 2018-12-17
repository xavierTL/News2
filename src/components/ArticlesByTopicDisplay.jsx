import React, { Component } from 'react';
import '../styles/ArticlesByTopicDisplay.css';
import * as api from '../api/api';
import ArticleCard from './ArticleCard';

class ArticlesByTopicDisplay extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articlesByTopic">
        {articles.map(article => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticles(this.props.slug).then(response => {
      console.log(response);
      this.setState({ articles: response.articles });
    });
  }
}

export default ArticlesByTopicDisplay;
