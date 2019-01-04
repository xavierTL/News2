import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/Forms.css';

class NewCommentForm extends Component {
  state = {
    body: '',
    newCommentId: null,
    isFlashing: false,
    isPosting: false
  };
  render() {
    const { isPosting, isFlashing, body } = this.state;
    return (
      <div className="commentFormContainer">
        <>
          <div className="newCommentHeader">
            <p>new comment: </p>
          </div>
          <div className="formOuter">
            <form className="formEl" onSubmit={this.handleSubmit}>
              <div className="formInner">
                <div className="inputField">
                  <label>
                    <input
                      className={`commentField ${isFlashing ? 'flash' : null}`}
                      id="body"
                      type="text"
                      value={body}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className={`submitCont`}>
                  <input
                    className={`submitButton ${
                      isPosting ? 'postLoader' : null
                    }`}
                    type="submit"
                    value={isPosting ? ' ' : 'POST'}
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    const { body } = this.state;
    if (body.length) this.setState({ isFlashing: false });
    this.setState({ body: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    if (body.length) {
      const { id, user_id, forceUpdate } = this.props;
      const newComment = { article_id: id, user_id, body };
      this.setState({ isPosting: true });
      api.postComment(newComment).then(() => {
        forceUpdate();
        this.setState({ isPosting: false });
      });
    } else {
      const { i } = this.state;
      this.setState({ isFlashing: true });
    }
  };
}

export default NewCommentForm;
