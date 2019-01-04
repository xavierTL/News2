import React, { Component } from 'react';
import * as api from '../api/api';
import { Link } from '@reach/router';
import '../styles/NewArticle.css';

class NewArticleForm extends Component {
  state = {
    title: '',
    body: 'Write your article here!',
    topic: 'coding',
    newArticleId: null,
    showNewArticle: false
  };
  render() {
    return (
      <div className="newArticleContainer">
        <div className="newArticleHeader">
          <h2>your NEW article</h2>
        </div>
        <div className="artFormContainer">
          <form onSubmit={this.handleSubmit} className="artForm">
            <label>
              <div className="artFormInner">
                <div className="titleContainer">
                  <div className="articleTitle">TITLE:</div>
                  <div className="articleTitleInputContainer">
                    <input
                      className="titleInput"
                      id="title"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="contentContainer">
                  <div className="contentTitle">WORDS:</div>
                  <div className="contentInputContainer">
                    <textarea
                      className="articleTextArea"
                      id="body"
                      type="text"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div>
                  <select
                    id="topic"
                    value={this.state.topic}
                    onChange={this.handleChange}
                  >
                    {this.props.topics.map(topic => (
                      <option key={topic.slug} value={topic.slug}>
                        {topic.slug}
                      </option>
                    ))}
                  </select>
                </div>
                <input type="submit" value="Submit" />
              </div>
            </label>
          </form>
        </div>
        <div className="yourNewArticle">
          {this.state.newArticleId ? (
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/articles/${this.state.newArticleId}`}
            >
              <div className="yourNewArticleLink">
                <p>YOUR NEW ARTICLE</p>
                <img
                  className="commentIcon newArtLink"
                  src={require('../images/article.svg')}
                  alt="comment icon"
                />
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    if (title.length && body.length) {
      const { user_id } = this.props;
      const post = { title, body, user_id };
      api.postArticle(topic, post).then(response => {
        this.setState({ newArticleId: response.postedData.article_id });
      });
    }
  };
}

export default NewArticleForm;
