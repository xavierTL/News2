import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: 'tickle122'
  };
  render() {
    return (
      <div className="loginCont">
        <div className="loginHeader">
          <p>please enter your username:</p>
        </div>
        <div className="loginFormContainer">
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <label>
              <div className="loginLabel">
                <input
                  className="loginInput"
                  id="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div />
            </label>
            <input type="submit" value="Submit" className="loginField" />
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
