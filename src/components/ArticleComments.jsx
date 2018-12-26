import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/ArticleComments.css';

class ArticleComments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div className="commentsContainer">
        {comments.map(comment => (
          <div key={comment.comment_id} className="commentContainer">
            <div className="commentBody">"{comment.body}"</div>
            <div className="commentAuthor">-{comment.author}</div>
          </div>
        ))}
      </div>
    );
  }
  componentDidMount() {
    api.fetchComments(this.props.id).then(response => {
      if (response) {
        this.setState({ comments: response.body });
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      api.fetchComments(this.props.id).then(response => {
        this.setState({ comments: response.body });
      });
    }
  }
}

export default ArticleComments;
