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
        <div className="header">
          <Link
            to={`/home`}
            style={{
              textDecoration: 'none',
              width: '100%',
              height: '100%',
              display: 'flex'
            }}
          >
            <img
              className="logo"
              alt="logo"
              src={require('../images/icon.svg')}
            />
          </Link>
        </div>
        <div className="topicsContainer">
          <div className="topicH2Cont">
            <h2 className="topicHead">topics</h2>
          </div>
          <div className="topicsDiv">
            {topics.map(topic => (
              <div key={topic.slug} className="topicDiv">
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
                    {topic.slug.toLowerCase()}
                  </button>
                </Link>
              </div>
            ))}
          </div>
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
