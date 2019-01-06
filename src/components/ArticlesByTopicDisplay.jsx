import React, { Component } from 'react';
import '../styles/ArticlesByTopicDisplay.css';
import * as api from '../api/api';
import ArticleCard from './ArticleCard';
import MoreArticlesButton from './MoreArticlesButton';
import ArticleController from './ArticleController';

class ArticlesByTopicDisplay extends Component {
  state = {
    articles: [],
    p: 0,
    isASC: true,
    criteria: 'title'
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
    this.setState({ p: 0 }, () => {
      const { isASC, criteria, p } = this.state;
      api
        .fetchArticles(this.props.slug, { isASC, criteria, p })
        .then(response => {
          this.setState({ articles: response.articles });
        });
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.setState({ p: 0, isASC: true, criteria: 'title' }, () => {
        const { p, isASC, criteria } = this.state;
        api
          .fetchArticles(this.props.slug, { isASC, criteria, p })
          .then(response => {
            this.setState({ articles: response.articles });
          });
      });
    }
  }
  toggleAscending = () => {
    const { isASC } = this.state;
    this.setState({ isASC: !isASC });
  };

  toggleSort = criteria => {
    this.setState({ criteria, p: 0 }, () => {
      const { isASC, criteria, p } = this.state;
      api
        .fetchArticles(this.props.slug, { criteria, isASC, p })
        .then(response => {
          this.setState({ articles: response.articles });
        });
    });
  };

  paginate = () => {
    const copy = [...this.state.articles];
    const { p, isASC, criteria } = this.state;
    if (copy.length % 10 === 0) {
      this.setState({ p: p + 10 }, () => {
        const { p } = this.state;
        api
          .fetchArticles(this.props.slug, { p, isASC, criteria })
          .then(response => {
            this.setState({
              articles: copy.concat(response.articles)
            });
          });
      });
    }
  };
}

export default ArticlesByTopicDisplay;
