import React, { Component } from 'react';
import '../styles/ArticlesByTopicDisplay.css';
import * as api from '../api/api';
import ArticleCard from './ArticleCard';
import MoreArticlesButton from './MoreArticlesButton';
import ArticleController from './ArticleController';

class ArticlesByTopicDisplay extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { username } = this.props;
    return (
      <div className="artsCont">
        <ArticleController toggleSort={this.toggleSort} />
        <div className="articlesByTopic">
          {articles.map((article, index) => (
            <ArticleCard
              username={username}
              key={article.article_id}
              article={article}
              index={index}
            />
          ))}
          <MoreArticlesButton />
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticles(this.props.slug).then(response => {
      this.setState({ articles: response.articles });
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api.fetchArticles(this.props.slug).then(response => {
        this.setState({ articles: response.articles });
      });
    }
  }
  toggleSort = criteria => {
    api.fetchArticles(this.props.slug, criteria).then(response => {
      this.setState({ articles: response.articles });
    });
  };
}

export default ArticlesByTopicDisplay;
