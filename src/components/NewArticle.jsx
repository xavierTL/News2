import React, { Component } from 'react';
import '../styles/NewArticle.css';
import NewArticleForm from './NewArticleForm';

class NewArticle extends Component {
  render() {
    return (
      <div className="newArticleOuter">
        <NewArticleForm
          user_id={this.props.user_id}
          topics={this.props.topics}
        />
      </div>
    );
  }
}

export default NewArticle;
