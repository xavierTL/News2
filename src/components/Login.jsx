import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: ''
  };
  render() {
    return (
      <div>
        <div className="commentFormContainer" />
        <div className="newCommentHeader">
          <p>username:</p>
        </div>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <label>
              <div>
                <input
                  className="commentField"
                  id="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.setUser(this.state.username);
  };
}

export default Login;
