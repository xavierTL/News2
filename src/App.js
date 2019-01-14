import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import ArticlesByTopicDisplay from './components/ArticlesByTopicDisplay';
import { Router } from '@reach/router';
import * as api from './api/api';
import ArticleDisplay from './components/ArticleDisplay';
import NewArticle from './components/NewArticle';
import Auth from './components/Auth';
import Home from './components/Home';
import NewTopic from './components/NewTopic';

class App extends Component {
  state = {
    user: {
      username: '',
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
              <NewArticle path="publish" user_id={user_id} topics={topics} />
              <NewTopic
                path="topic"
                user_id={user_id}
                topics={topics}
                updateTopics={this.updateTopics}
              />
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
  updateTopics = () => {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  };
  setUser = username => {
    const user = this.state.users.find(user => user.username === username);
    if (user) {
      this.setState({ user });
    }
  };
}

export default App;
