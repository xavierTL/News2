import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/Forms.css';

class NewCommentForm extends Component {
  state = {
    body: '',
    newCommentId: null
  };
  render() {
    return (
      <div className="commentFormContainer">
        <>
          <div className="newCommentHeader">
            <p>comment: </p>
          </div>
          <div className="formOuter">
            <form className="formEl" onSubmit={this.handleSubmit}>
              <div className="formInner">
                <div className="inputField">
                  <label>
                    <input
                      className="commentField"
                      id="body"
                      type="text"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="submitCont">
                  <input
                    className="submitButton"
                    type="submit"
                    value="Submit"
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
    this.setState({ body: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { id, user_id, forceUpdate } = this.props;
    const newComment = { article_id: id, user_id, body };
    api.postComment(newComment).then(() => forceUpdate());
  };
}

export default NewCommentForm;
