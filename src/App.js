import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import ArticleDisplay from './components/ArticleDisplay';
import * as api from './api/api';

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
          <ArticleDisplay />
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
