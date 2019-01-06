import React, { Component } from 'react';
import '../styles/ArticlesByTopicDisplay.css';
import * as api from '../api/api';
import ArticleCard from './ArticleCard';
import MoreArticlesButton from './MoreArticlesButton';
import ArticleController from './ArticleController';

class ArticlesByTopicDisplay extends Component {
  state = {
    articles: [],
    p: 10,
    isASC: true
  };
  render() {
    const { articles, isASC } = this.state;
    const { username } = this.props;
    return (
      <div className="artsCont">
        <ArticleController
          toggleSort={this.toggleSort}
          toggleAscending={this.toggleAscending}
          isASC={isASC}
        />
        <div className="articlesByTopic">
          {articles.length ? (
            <>
              {articles.map((article, index) => (
                <ArticleCard
                  username={username}
                  key={article.article_id}
                  article={article}
                  index={index}
                />
              ))}
              <MoreArticlesButton paginate={this.paginate} />
            </>
          ) : (
            <div className="nothingHere">
              <div className="nothingHereMessage">{`loading...`}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { isASC } = this.state;
    api.fetchArticles(this.props.slug, { isASC }).then(response => {
      this.setState({ articles: response.articles });
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api.fetchArticles(this.props.slug, {}).then(response => {
        this.setState({ articles: response.articles, p: 10 });
      });
    }
  }
  toggleAscending = () => {
    const { isASC } = this.state;
    this.setState({ isASC: !isASC });
  };

  toggleSort = criteria => {
    const { isASC } = this.state;

    api.fetchArticles(this.props.slug, { criteria, isASC }).then(response => {
      this.setState({ articles: response.articles });
    });
  };

  paginate = () => {
    const copy = [...this.state.articles];
    const { p, isASC } = this.state;
    if (copy.length === p) {
      api.fetchArticles(this.props.slug, { p, isASC }).then(response => {
        this.setState({ articles: copy.concat(response.articles), p: p + 10 });
      });
    }
  };
}

export default ArticlesByTopicDisplay;
