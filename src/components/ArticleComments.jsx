import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/ArticleComments.css';
import NewCommentForm from './NewCommentForm';
import CommentsWheel from './CommentsWheel';

class ArticleComments extends Component {
  state = {
    comments: [],
    show: false,
    hasResponded: false
  };
  render() {
    const { username, id, user_id } = this.props;
    const { comments, show, hasResponded } = this.state;
    return (
      <>
        <button onClick={() => this.toggleShow()}>
          {show ? 'Hide' : 'Show'} Comments
        </button>

        {show ? (
          <div className={'show'}>
            <NewCommentForm
              id={id}
              user_id={user_id}
              forceUpdate={this.forceUpdate}
            />
            <CommentsWheel
              comments={comments}
              deleteComment={this.deleteComment}
              username={username}
              hasResponded={hasResponded}
            />
          </div>
        ) : null}
      </>
    );
  }
  componentDidMount() {
    api.fetchComments(this.props.id).then(response => {
      if (response) {
        this.setState({ comments: response.body, hasResponded: true });
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
        this.setState({ comments: response.body, hasResponded: true });
      }
    });
  };
  deleteComment = id => {
    api.deleteCommentById(id).then(() => {
      api.fetchComments(this.props.id).then(response => {
        if (response) {
          this.setState({ comments: response.body, hasResponded: true });
        }
      });
    });
  };
  toggleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
}

export default ArticleComments;
