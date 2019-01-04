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
          <p>welcome back,</p>
          <p className="userName">{username.toUpperCase()},</p>
          <p>what do you want to do?</p>
        </div>
        <div className="linkContainer">
          <Link
            to="/publish"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <SideLink text={'Article'} img={'idea.svg'} />
          </Link>
        </div>
        <div className="linkContainer">
          <Link to="/topic" style={{ textDecoration: 'none', color: 'black' }}>
            <SideLink text={'Topic'} img={'topic.svg'} />
          </Link>
        </div>
        <TopTen />
      </div>
    );
  }
}

export default SideBar;
