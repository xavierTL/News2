import React, { Component } from 'react';
import '../styles/SideBar.css';

class SideBar extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="sideBarContainer">{`welcome back, ${username}`}</div>
    );
  }
}

export default SideBar;
