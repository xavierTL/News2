import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/Forms.css';

class NewCommentForm extends Component {
  state = {
    body: '',
    newCommentId: null,
    i: 0
  };
  render() {
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
                      className={`commentField ${
                        this.state.i > 0 ? 'flash' : null
                      }`}
                      id="body"
                      type="text"
                      value={this.state.body}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="submitCont">
                  <input
                    className={`submitButton`}
                    type="submit"
                    value="TROLL"
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
    if (body.length) {
      const { id, user_id, forceUpdate } = this.props;
      const newComment = { article_id: id, user_id, body };
      api.postComment(newComment).then(() => forceUpdate());
    } else {
      const { i } = this.state;
      this.setState({ i: i + 1 });
    }
  };
}

export default NewCommentForm;
