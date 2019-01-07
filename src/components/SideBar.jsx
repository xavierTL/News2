import React, { Component } from 'react';
import '../styles/SideBar.css';
import { Link } from '@reach/router';
import SideLink from './SideLink';
import TopTen from './TopTen';

class SideBar extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="sideBarContainer">
        <div className="welcomeContainer">
          <p className="userName">{username.toLowerCase()},</p>
          <p>what do you want to do?</p>
        </div>
        <div className="linkContainer">
          <Link
            to="/publish"
            style={{ textDecoration: 'none', color: 'black', width: '100%' }}
          >
            <SideLink text={'post a new article'} img={'idea.svg'} />
          </Link>
        </div>
        <div className="linkContainer">
          <Link
            to="/topic"
            style={{ textDecoration: 'none', color: 'black', width: '100%' }}
          >
            <SideLink text={'post a new topic'} img={'top.svg'} />
          </Link>
        </div>
        <TopTen />
      </div>
    );
  }
}

export default SideBar;
