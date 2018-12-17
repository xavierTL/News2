import React, { Component } from 'react';
import '../styles/Nav.css';
import '../styles/App.css';
import { Link } from '@reach/router';

class Nav extends Component {
  state = { select: null };
  render() {
    const { topics } = this.props;
    return (
      <div className="navContainer">
        <div className="navHeader">
          <div>
            <h2>Topics</h2>
          </div>
        </div>
        <div className="topicsContainer">
          {topics.map(topic => (
            <div key={topic.slug} className="topicContainer topicButtons">
              <Link to={`/topics/${topic.slug}`} className="topicButton">
                <button
                  className="inner"
                  id={this.state.select === topic.slug ? 'selected' : null}
                  onClick={() => this.toggleActive(topic.slug)}
                >
                  {topic.slug}
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
