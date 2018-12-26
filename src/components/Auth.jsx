import React, { Component } from 'react';
import Login from './Login';

class Auth extends Component {
  render() {
    const { users, setUser, user } = this.props;
    const usernames = users.map(user => user.username);
    if (usernames.includes(user.username)) {
      return this.props.children;
    } else return <Login setUser={setUser} />;
  }
}

export default Auth;
