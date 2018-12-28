import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import ArticlesByTopicDisplay from './components/ArticlesByTopicDisplay';
import { Router } from '@reach/router';
import * as api from './api/api';
import ArticleDisplay from './components/ArticleDisplay';
import NewTopic from './components/NewTopic';
import Auth from './components/Auth';
import Home from './components/Home';

class App extends Component {
  state = {
    user: {
      // username: 'default',
      // name: 'Default Dave',
      // avatar_url: '',
      // user_id: 99999
      username: 'tickle122',
      name: 'Tom Tickle',
      avatar_url: '',
      user_id: 1
    },
    users: [],
    topics: []
  };
  render() {
    const { topics, users, user } = this.state;
    const { username, user_id } = user;
    return (
      <Auth users={users} setUser={this.setUser} user={user}>
        <div className="App">
          <div className="mainSpread">
            <Nav topics={topics} />
            <Router className="center">
              <Home path="/*" />
              <ArticlesByTopicDisplay username={username} path="topics/:slug" />
              <ArticleDisplay
                path="articles/:id"
                user_id={user_id}
                username={username}
              />
              <NewTopic path="newTopic" />
            </Router>
            <SideBar username={username} topics={topics} />
          </div>
        </div>
      </Auth>
    );
  }
  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
      api.fetchUsers().then(users => {
        this.setState({ users });
      });
    });
  }
  setUser = username => {
    const user = this.state.users.find(user => user.username === username);
    if (user) {
      this.setState({ user });
    }
  };
}

export default App;
