import React, { Component } from 'react';
import '../styles/Nav.css';
import '../styles/App.css';
import { Link } from '@reach/router';
import * as utils from '../utils';

class Nav extends Component {
  state = { select: null };
  render() {
    const { topics } = this.props;
    return (
      <div className="navContainer">
        <div className="header">
          <img
            className="logo"
            alt="logo"
            src={require('../images/icon.svg')}
          />
        </div>
        <div className="topicsContainer">
          <h2 className="topicHead">TOPICS</h2>
          {topics.map(topic => (
            <div key={topic.slug} className="topicContainer topicButtons">
              <Link
                to={`/topics/${topic.slug}`}
                className="topicButton"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <button
                  className="inner"
                  id={this.state.select === topic.slug ? 'selected' : null}
                  onClick={() => this.toggleActive(topic.slug)}
                >
                  {utils.capitliseFirst(topic.slug)}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  toggleActive = target => {
    target === this.state.open
      ? this.setState({ select: null })
      : this.setState({ select: target });
  };
}

export default Nav;
