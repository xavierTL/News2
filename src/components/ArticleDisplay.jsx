import React, { Component } from 'react';
import * as api from '../api/api';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import '../styles/ArticleDisplay.css';

class ArticleDisplay extends Component {
  state = {
    article: {},
    responded: false,
    hasVoted: false
  };
  render() {
    const { id, user_id, username } = this.props;
    const { article, responded } = this.state;
    return (
      <div className="articleDisplay">
        {article.title ? (
          <>
            <ArticleContent
              article={article}
              toggleVotes={this.toggleVotes}
              username={username}
              deleteArticle={this.deleteArticle}
            />

            <ArticleComments id={id} username={username} user_id={user_id} />
          </>
        ) : (
          <div className="nothingHere">
            <div className="nothingHereMessage">
              {responded ? 'nothing here!' : 'loading...'}
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    api.fetchArticleById(this.props.id).then(response => {
      this.setState({ article: response, responded: true });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      console.log(this.props.id);
      api.fetchArticles(this.props.id).then(response => {
        this.setState({ article: response, responded: true });
      });
    }
  }
  toggleVotes = increment => {
    const { article_id } = this.state.article;
    const { hasVoted } = this.state;
    if (!hasVoted) {
      const newVersion = { ...this.state.article };
      api.voteOnArticle(article_id, increment).then(response => {
        newVersion.votes = response.updatedArticle[0].votes;
        this.setState({ article: newVersion, hasVoted: true });
      });
    }
  };
  deleteArticle = id => {
    const blank = {};
    api.deleteArticle(id).then(() => this.setState({ article: blank }));
  };
}

export default ArticleDisplay;
