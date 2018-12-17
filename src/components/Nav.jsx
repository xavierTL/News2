import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div className="navContainer">
        <div className="navHeader">
          <h2>Topics</h2>
        </div>
        <div className="topicsContainers">
          {topics.map(topic => (
            <div className="topicContainer">
              <button>{topic.slug}</button>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Nav;
