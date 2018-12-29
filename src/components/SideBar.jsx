import React, { Component } from 'react';
import '../styles/SideBar.css';
import { Link } from '@reach/router';
import SideLink from './SideLink';

class SideBar extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="sideBarContainer">
        <div className="welcomeContainer">{`welcome back, ${username}! What do you want to do?`}</div>
        <div className="linkContainer">
          <SideLink text={'POST NEW ARTICLE'} />
        </div>
        <div className="linkContainer">
          <SideLink text={'POST NEW TOPIC'} />
        </div>
      </div>
    );
  }
}

export default SideBar;
