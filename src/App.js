import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import ArticlesByTopicDisplay from './components/ArticlesByTopicDisplay';
import { Router } from '@reach/router';
import * as api from './api/api';
import ArticleDisplay from './components/ArticleDisplay';

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="mainSpread">
          <Nav topics={topics} />
          <Router className="center">
            <ArticlesByTopicDisplay path="topics/:slug" />
            <ArticleDisplay path="articles/:id" />
          </Router>
          <SideBar />
        </div>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    api.fetchTopics().then(topics => {
      console.log(topics);
      this.setState({ topics });
    });
  }
}

export default App;
