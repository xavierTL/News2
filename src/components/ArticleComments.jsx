import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/ArticleComments.css';
import NewCommentForm from './NewCommentForm';

class ArticleComments extends Component {
  state = {
    comments: []
  };
  render() {
    const { username, id, user_id } = this.props;
    const { comments } = this.state;
    return (
      <>
        <NewCommentForm
          id={id}
          user_id={user_id}
          forceUpdate={this.forceUpdate}
        />
        <div className="commentsContainer">
          {comments.map(comment => (
            <div key={comment.comment_id} className="commentContainer">
              <div className="commentBody">"{comment.body}"</div>
              <div className="commentAuthor">
                -{comment.author}
                {username === comment.author ? (
                  <div className="deleteCommentContainer">
                    <button
                      className="deleteCommentButton"
                      onClick={() => this.deleteComment(comment.comment_id)}
                    >
                      x
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </>
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
  forceUpdate = () => {
    api.fetchComments(this.props.id).then(response => {
      if (response) {
        this.setState({ comments: response.body });
      }
    });
  };
  deleteComment = id => {
    api.deleteCommentById(id).then(() => {
      api.fetchComments(this.props.id).then(response => {
        if (response) {
          this.setState({ comments: response.body });
        }
      });
    });
  };
}

export default ArticleComments;
